import React from "react";
import { useDrag } from "react-dnd";

function Item({ id, name }) {
  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <li
      ref={drag}
      id={id}
      style={{ backgroundColor: isDragging ? "aquamarine" : "white" }}
    >
      {name}
    </li>
  );
}

export default Item;
