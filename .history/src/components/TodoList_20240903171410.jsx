import TodoItem from "./TodoItem";
function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="max-w-md mx-auto flex flex-col">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
