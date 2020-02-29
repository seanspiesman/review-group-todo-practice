import React from "react";

const ListItem = props => {
  return (
    <li>
      {props.item + " "}
      <button onClick={() => props.delete(props.index)}>Delete</button>
    </li>
  );
};

export default ListItem;
