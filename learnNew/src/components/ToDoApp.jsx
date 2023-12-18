import React from "react";
import { toDoList } from "../hooks/BearCounter";
import { useState } from "react";

export default function ToDoApp() {
  const { tasks, addTask, clearTasks } = toDoList();
  const [input, setInput] = useState("");

  const handleClick = () => {
    addTask(input);
    setInput("");
  };
  return (
    <div className="toDoWrapper">
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>ADD Task</button>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>{task}</li>
        ))}
      </ol>
      <button onClick={clearTasks}> Clear Tasks</button>
    </div>
  );
}
