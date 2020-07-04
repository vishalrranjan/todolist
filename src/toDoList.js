import React, { useState } from "react";
import "./todo.css";

function ToDoList() {
  const [items, setItems] = useState([
    "Buy Milk",
    "Go To GYM",
    "Buy Groceries"
  ]);
  // const items = ["Buy Milk","Go To GYM","Buy Groceries"];
  const [newItem, setNewItem] = useState("");

  let options = { weekday: "long", month: "short", day: "numeric" };
  let today = new Date();
  let formateDate = today.toLocaleString("en-US", options);

  // new item input function
  const inputHandler = e => {
    let item = e.target.value;
    setNewItem(item);
    console.log(item);
  };

  // add button function
  const submitHandler = () => {
    setItems([...items, newItem]);
    setNewItem(" ");
    console.log("input item", newItem);
  };

  return (
    <div>
      <div className="box" id="heading">
        <h1>{formateDate}</h1>
      </div>
      <div className="box">
        {items.map(itemName => (
          <div key={itemName} className="item">
            <input type="checkbox" />
            <p>{itemName}</p>
          </div>
        ))}

        <form className="item">
          <input
            onChange={inputHandler}
            type="text"
            placeholder="Item Name"
            value={newItem}
          />
          <button type="button" onClick={submitHandler}>
            +
          </button>
        </form>
      </div>
    </div>
  );
}

export default ToDoList;
