// src/components/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, toggleRead, setTaskToEdit }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleRead={toggleRead}
          setTaskToEdit={setTaskToEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;

