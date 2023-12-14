import "./App.css";
import { BearCounter } from "./components/bearCounter";
import { Controls } from "./components/incrementButton";
import { toDoList } from "./stateManagment/zustandTest";

import { useState } from "react";

function App() {
  const tasks = toDoList((state) => state.tasks);
  const addTask = toDoList((state) => state.addTask);
  const clearTasks = toDoList((state) => state.clearTasks);

  const [input, setInput] = useState("");

  const handleClick = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="appWrapper">
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
      <div className="counterWrapper">
        <BearCounter />
        <Controls />
      </div>
    </div>
  );
}

export default App;
