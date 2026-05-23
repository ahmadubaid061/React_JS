import { useState } from "react";
import Task from "./Task";

function TaskContainer() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const completedCount = tasks.filter((t) => t.completed).length;

  function handleAdd() {
    if (inputValue.trim() === "") return;
    const newTask = { id: Date.now(), title: inputValue, completed: false };
    setTasks([...tasks, newTask]);
    setInputValue("");
  }

  function handleComplete(id) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }

  function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <div className="task-container">
      <h1>My Task Manager</h1>

      <div className="counters">
        <h2>
          Total Tasks <span>{tasks.length}</span>
        </h2>
        <h2>
          Completed <span>{completedCount}</span>
        </h2>
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Enter task title..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <div className="tasks">
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            completed={task.completed}
            onComplete={() => handleComplete(task.id)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskContainer;
