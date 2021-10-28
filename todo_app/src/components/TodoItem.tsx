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
    <div className="flex flex-row items-center">
      <input
        type="checkbox"
        checked={isDone}
        onChange={checkboxHandler}
        className="w-5 h-5 mr-5"
      />
      <li key={id} className="text-2xl">
        {title}
      </li>
    </div>
  );
};

export default TodoItem;
