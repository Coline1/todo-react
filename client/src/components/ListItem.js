import React from "react";
import { useState } from "react";
import "./utilities.css";

const ListItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <li>
        <input type="checkbox"></input>
        <span className="body u-bold form">{props.content}</span>
        <button onClick={props.delTodo}>X</button>
      </li>
    </div>
  );
};

export default ListItem;
