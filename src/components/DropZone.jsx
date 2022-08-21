import React from "react";
import { useDrop, useDrag } from "react-dnd";
import Item from "./Item";

const DropZone = ({ items, setItems, sublist, setSublist }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "subList",
    item: { sublist, id: "sl-2", type: "subList" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ["listItem", "list", "subList"],
    drop: (item) => {
      console.log("subList dragged item: ", item); // TODO: remove this line
      handleDrop(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDrop = (id) => {
    const selectedItem = items.filter((item) => item.id === id);
    setSublist((sublist) => [...sublist, selectedItem[0]]);
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div
      ref={drag}
      style={{ backgroundColor: isDragging ? "aquamarine" : "white" }}
    >
      <div className="sub-list" ref={drop}>
        <h5>SubList</h5>
        {sublist.map((item) => {
          return <Item key={item.id} id={item.id} name={item.name} />;
        })}
      </div>
    </div>
  );
};
export default DropZone;
