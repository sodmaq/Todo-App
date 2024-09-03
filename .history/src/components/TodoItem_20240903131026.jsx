function TodoItem() {
  return <div>

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)} // Call function to toggle completion
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button> {/* Call function to delete todo */}
    </li>
  );
}

export default TodoItem;

  </div>;
}

export default TodoItem;
