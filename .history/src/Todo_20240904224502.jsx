import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs
import { NavLink } from "react-router-dom";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: uuidv4(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto w-full ">
        <Header />
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
        <div className="mt-4">
          <NavLink to="/quote">
            Are you depressed? <span>Get Quote</span>{" "}
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default Todo;
