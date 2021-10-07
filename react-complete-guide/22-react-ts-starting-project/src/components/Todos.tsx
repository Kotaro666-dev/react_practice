import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

const Todos: React.FC = (props) => {
  const context = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {context.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            id={item.id}
            removeTodo={context.removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
