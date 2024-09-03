import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="">
      <Header />
      <TodoInput />
      <TodoList />
      <TodoItem />
    </div>
  );
}

export default App;
