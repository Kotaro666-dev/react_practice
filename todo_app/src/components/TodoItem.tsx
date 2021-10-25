import React from 'react';

type ToDoItemProps = {
  id: number;
  title: string;
  isDone: boolean;
};

const TodoItem: React.VFC<ToDoItemProps> = ({id, title, isDone}) => {
  return <li key={id}>{title}</li>;
};

export default TodoItem;
