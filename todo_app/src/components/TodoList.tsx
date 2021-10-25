import React from 'react';

import TodoItem from './TodoItem';

const DUMMY_TODOS = [
  {id: 1, title: 'Test1', isDone: false},
  {id: 2, title: 'Test2', isDone: false},
  {id: 3, title: 'Test3', isDone: false},
];

const TodoList = () => {
  return (
    <ul>
      {DUMMY_TODOS.map(item => (
        <TodoItem id={item.id} title={item.title} isDone={item.isDone} />
      ))}
    </ul>
  );
};

export default TodoList;
