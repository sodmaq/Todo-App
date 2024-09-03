function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="flex justify-between space-x-10">
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    </div>
  );
}

export default TodoItem;
