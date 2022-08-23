import React from "react";
import { useDrag } from "react-dnd";

function Item({ id, name }) {
  const [{ isDragging }, drag] = useDrag({
    type: "listItem",
    item: { id, name, type: "listItem" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <li
      ref={drag}
      id={id}
      style={{ backgroundColor: isDragging ? "yellow" : "white" }}
    >
      {name}
    </li>
  );
}

export default Item;
