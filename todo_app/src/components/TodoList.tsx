import React from 'react';

import TodoItem from './TodoItem';
import {useSelector} from '../store/store';

// const DUMMY_TODOS = [
//   {id: 1, title: 'Test1', isDone: false},
//   {id: 2, title: 'Test2', isDone: false},
//   {id: 3, title: 'Test3', isDone: false},
// ];

const TodoList = () => {
  const todos = useSelector(state => state.todo);

  return (
    <ul className="w-1/4">
      {todos.map(item => (
        <TodoItem id={item.id} title={item.title} isDone={item.isDone} />
      ))}
    </ul>
  );
};

export default TodoList;
