import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Item from "./Item";
import { ListItems, List } from "../data/ListItems";
import DropZone from "./DropZone";

function DragDrop() {
  const [items, setItems] = useState(ListItems);
  const [sublist, setSublist] = useState([
    { id: "i-7", name: "subtask 1", type: "listItem" },
  ]);
  const [list, setList] = useState(List);

  const [{ isOver }, drop] = useDrop({
    accept: ["listItem", "list", "subList"],
    drop: (item) => {
      handleDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDrop = (item) => {
    if (item.type === "listItem") {
      const selectedItem = items.filter((i) => i.id === item.id);
      setList((list) => [...list, selectedItem[0]]);
      setItems((items) => items.filter((i) => i.id !== item.id));
    }

    if (item.type === "subList") {
      setList((list) => [...list, item]);
    }
  };

  return (
    <>
      {/* List to drop stuff into: */}
      <div className="list" ref={drop}>
        <h3>LIST</h3>

        {list.map((item) => {
          if (item.type === "listItem") {
            return <Item key={item.id} id={item.id} name={item.name} />;
          } else if (item.type === "subList") {
            if (item.sublist) {
              return (
                <div key={item.id} className="sub-list">
                  <h5>{item.name}</h5>

                  {item.sublist.map((child) => {
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

      <DropZone
        items={items}
        setItems={setItems}
        sublist={sublist}
        setSublist={setSublist}
      />

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
