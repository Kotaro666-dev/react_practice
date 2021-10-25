import React, {useState} from 'react';

const AddTodo = () => {
  const [newTodoInput, setNewTodoInput] = useState<string>('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;

    setNewTodoInput(text);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Add state

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
