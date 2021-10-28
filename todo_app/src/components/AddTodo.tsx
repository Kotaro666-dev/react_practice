import React, {useState} from 'react';

import {useAppDispatch, Todo} from '../store/store';
import {addTodo} from '../store/todo-reducer';

const AddTodo = () => {
  const [newTodoInput, setNewTodoInput] = useState<string>('');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;

    setNewTodoInput(text);
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (newTodoInput.trim().length === 0) {
      return;
    }

    // Add state
    const newTodo: Todo = {
      id: Math.floor(Date.now() / 1000), // Create Unixtime
      title: newTodoInput,
      isDone: false,
    };
    dispatch(addTodo(newTodo));

    setNewTodoInput('');
  };

  const formClass = 'h-1/4 w-1/2 flex flex-col justify-evenly items-center';
  const formLabelClass = 'text-3xl';
  const formInputClass =
    'py-2 px-4 border border-black focus:outline-none rounded mr-4';
  const buttonClass =
    'bg-green-500 text-white text-center rounded py-2 px-4 hover:bg-green-700 active:bg-green-500';

  return (
    <form onSubmit={onSubmitHandler} className={formClass}>
      <label htmlFor="New Todo" className={formLabelClass}>
        New Todo
      </label>
      <div>
        <input
          type="text"
          placeholder="Your task"
          value={newTodoInput}
          onChange={onChangeHandler}
          className={formInputClass}
        />
        <button className={buttonClass}>Add</button>
      </div>
    </form>
  );
};

export default AddTodo;
