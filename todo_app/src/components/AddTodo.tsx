import React, {useState} from 'react';

import {useAppDispatch, Todo} from '../store/store';
import {addTodo} from '../store/todo-reducer';

const AddTodo = () => {
  const [newTodoInput, setNewTodoInput] = useState<string>('');
  const dispatch = useAppDispatch();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;

    setNewTodoInput(text);
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    // Add state
    const newTodo: Todo = {
      id: 1,
      title: newTodoInput,
      isDone: false,
    };
    dispatch(addTodo(newTodo));

    setNewTodoInput('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="New Todo">New Todo</label>
      <input type="text" value={newTodoInput} onChange={onChangeHandler} />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
