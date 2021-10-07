import React from "react";

import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  removeTodo: () => void;
}> = (props) => {
  return (
    <li onClick={props.removeTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
