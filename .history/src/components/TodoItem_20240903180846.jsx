import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const 
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
        <div>
          <button
            className="hover:text-red-500"
            onClick={() => deleteTodo(todo.id)}
          >
            <RiDeleteBin5Line />
          </button>
          <button
            className="hover:text-blue-500"
            onClick={() => editTodo(todo.id)}
          >
            <CiEdit />
          </button>
        </div>
      </li>
    </div>
  );
}

export default TodoItem;
