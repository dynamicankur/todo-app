// src/components/AddTaskForm.js
import React, { useState, useEffect } from "react";

function AddTaskForm({ addTask, taskToEdit, updateTask }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setInput(taskToEdit.text);
    } else {
      setInput("");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      updateTask(taskToEdit.id, input);
    } else {
      addTask(input);
    }
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded-l-md flex-grow"
        placeholder="Enter a task..."
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
      >
        {taskToEdit ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default AddTaskForm;
