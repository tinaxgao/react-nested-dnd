import React from "react";

function Item({ id, name }) {
  return <li id={id}>{name}</li>;
}

export default Item;
