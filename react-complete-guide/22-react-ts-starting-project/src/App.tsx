import Todos from "./components/Todo";
import Todo from "./models/todo";

const todos = [new Todo("TEST1"), new Todo("TEST2")];

function App() {
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
