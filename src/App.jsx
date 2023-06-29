import { useState } from "react";
import Form from "./components/Form";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const setLocalStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

const getLocalStorage = () => {
  const items = localStorage.getItem("items");
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

const App = () => {
  console.log("app");
  const [items, setItems] = useState(getLocalStorage());
  const addItem = (newItem) => {
    const newItemsList = [...items, newItem];
    setItems(newItemsList);
    setLocalStorage(newItemsList);
    toast.success("item added!");
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    setLocalStorage(updatedItems);
    toast.success("item removed!");
  };

  const editItem = (id) => {
    console.log(id);
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setItems(updatedItems);
    setLocalStorage(updatedItems);
  };

  return (
    <main className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </main>
  );
};

export default App;
