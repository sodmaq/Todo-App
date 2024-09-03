function TodoItem() {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)} // Call function to toggle completion
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>{" "}
        {/* Call function to delete todo */}
      </li>
    </div>
  );
}

export default TodoItem;
