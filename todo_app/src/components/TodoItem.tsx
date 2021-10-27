import React from 'react';

import {useAppDispatch} from '../store/store';
import {updateTodo} from '../store/todo-reducer';

type ToDoItemProps = {
  id: number;
  title: string;
  isDone: boolean;
};

const TodoItem: React.VFC<ToDoItemProps> = ({id, title, isDone}) => {
  const dispatch = useAppDispatch();

  const checkboxHandler = () => {
    dispatch(updateTodo(id));
  };

  return (
    <>
      <li key={id}>{title}</li>
      <input type="checkbox" checked={isDone} onChange={checkboxHandler} />
    </>
  );
};

export default TodoItem;
