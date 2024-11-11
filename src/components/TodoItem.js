// src/components/TodoItem.js
import React from "react";

function TodoItem({ task, deleteTask, toggleRead, setTaskToEdit }) {
  return (
    <li
      className={`p-3 border rounded-md flex justify-between items-center cursor-pointer ${
        task.isRead ? "bg-green-100" : "bg-white"
      }`}
      onClick={() => toggleRead(task.id)}
    >
      <span>{task.text}</span>
      <div className="space-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setTaskToEdit(task);
          }}
          className="text-blue-500 hover:text-blue-700"
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
