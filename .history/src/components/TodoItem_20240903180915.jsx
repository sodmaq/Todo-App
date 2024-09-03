import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText); // Pass the updated text back to the parent component
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewText(todo.text); // Revert to the original text if edit is canceled
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div>
      <li className="bg-blue-400 flex items-center px-4 py-2 justify-between mt-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-white border border-gray-300 rounded px-2 py-1"
          />
        ) : (
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
        )}
        <div>
          {isEditing ? (
            <>
              <button className="hover:text-green-500" onClick={handleSave}>
                Save
              </button>
              <button
                className="hover:text-red-500 ml-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button className="hover:text-blue-500" onClick={handleEdit}>
                <CiEdit />
              </button>
              <button
                className="hover:text-red-500 ml-2"
                onClick={() => deleteTodo(todo.id)}
              >
                <RiDeleteBin5Line />
              </button>
            </>
          )}
        </div>
      </li>
    </div>
  );
}

export default TodoItem;
