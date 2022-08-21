import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Item from "./Item";
import { ListItems, List } from "../data/ListItems";

function DragDrop() {
  const [items, setItems] = useState(ListItems);
  const [list, setList] = useState(List);

  const [{ isOver }, drop] = useDrop({
    accept: ["item", "list"],
    drop: (item) => {
      console.log("dragged item: ", item); // TODO: remove this line
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
        <h3>LIST</h3>

        {list.map((item) => {
          console.log("1. item: ", item); // TODO: remove

          if (item.type === "listItem") {
            return <Item key={item.id} id={item.id} name={item.name} />;
          } else if (item.type === "subList") {
            if (item.children) {
              return (
                <div key={item.id} className="sub-list">
                  <h5>{item.name}</h5>

                  {item.children.map((child) => {
                    return (
                      <Item key={child.id} id={child.id} name={child.name} />
                    );
                  })}
                </div>
              );
            }
          }
          return null;
        })}
      </div>

      {/* Sub-list that can be dragged into a main List: */}
      <div className="sub-list" ref={drop}>
        <h5>SubList</h5>
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
