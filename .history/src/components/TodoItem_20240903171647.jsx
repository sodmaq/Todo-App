function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="">
      <li className="bg-blue-400 flex items-center px-4 py-2  justify-between mt-4">
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
