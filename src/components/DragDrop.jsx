import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Item from "./Item";
import { ListItems, List } from "../data/ListItems";

function DragDrop() {
  const [items, setItems] = useState(ListItems);
  const [list, setList] = useState(List);

  const [{ isOver }, drop] = useDrop({
    accept: "item",
    drop: (item) => {
      addItemToList(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const addItemToList = (id) => {
    const selectedItem = ListItems.filter((item) => item.id === id);
    setList((list) => [...list, selectedItem[0]]);
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* List to drop stuff into: */}
      <div className="list" ref={drop}>
        <h5>List</h5>

        {list.map((item) => {
          console.log("1. item: ", item);

          if (item.type === "listItem") {
            return <Item key={item.id} id={item.id} name={item.name} />;
          } else if (item.type === "subList") {
            return <div key={item.id}>{item.name}</div>;
          } else {
            return null;
          }
        })}
      </div>

      {/* Sub-list that can be dragged into a main List */}
      <div className="sub-list">
        <h5>Sub-list</h5>
      </div>

      {/* Items to be dragged into a list: */}
      <div>
        <h5>List Items</h5>
        {items.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} />
        ))}
      </div>
    </>
  );
}

export default DragDrop;
