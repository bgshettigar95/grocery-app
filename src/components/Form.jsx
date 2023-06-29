import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const item = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.current.value) {
      toast.error("please enter value");
      return;
    }
    const newItem = {
      name: item.current.value,
      completed: false,
      id: uuidv4(),
    };
    addItem(newItem);
    item.current.value = "";
  };
  return (
    <form>
      <h4>Grocery Bud</h4>
      <section className="form-control">
        <input type="text" name="item" className="form-input" ref={item} />
        <button className="btn" type="submit" onClick={handleSubmit}>
          Add Item
        </button>
      </section>
    </form>
  );
};

export default Form;
