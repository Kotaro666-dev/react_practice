import './App.css';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
