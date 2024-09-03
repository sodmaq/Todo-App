import TodoItem from "./TodoItem";
function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="max-w-md mx-auto">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
