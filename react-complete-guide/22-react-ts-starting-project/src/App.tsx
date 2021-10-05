import Todos from "./components/Todo";

const DUMMIES_ITEMS = ["TEST1", "TEST2"];

function App() {
  return (
    <div>
      <Todos items={DUMMIES_ITEMS} />
    </div>
  );
}

export default App;
