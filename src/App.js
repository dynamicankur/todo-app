
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, isRead: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    );
    setTaskToEdit(null);
  };

  const toggleRead = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isRead: !task.isRead } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">To-Do Application</h2>
        <AddTaskForm
          addTask={addTask}
          taskToEdit={taskToEdit}
          updateTask={updateTask}
        />
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleRead={toggleRead}
          setTaskToEdit={setTaskToEdit}
        />
      </div>
    </div>
  );
}

export default App;
