import NewTodo from "./components/NewTodo";
import Todos from "./components/Todo";
import Todo from "./models/todo";

const initialTodos = [new Todo("TEST1"), new Todo("TEST2")];

function App() {
  const addTodoHandler = (todoText: string) => {
    console.log(todoText);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={initialTodos} />
    </div>
  );
}

export default App;
