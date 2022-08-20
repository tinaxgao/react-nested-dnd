import React from "react";
import Item from "./Item";
import ListItems from "../data/ListItems";

function DragDrop() {
  return (
    <>
      <div>List</div>
      <div>
        List Items
        {ListItems.map((item) => (
          <Item id={item.id} name={item.name} />
        ))}
      </div>
    </>
  );
}

export default DragDrop;
