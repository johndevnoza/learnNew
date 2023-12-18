import React from "react";
import "../App.css";
import { BearCounter } from "./common/bearCounter";
import { Controls } from "./common/incrementButton";
import ToDoApp from "./ToDoApp";

export default function CounterToDo() {
  return (
    <div className="todoAndCounterWrapper">
      <ToDoApp />
      <div className="counterWrapper">
        <BearCounter />
        <Controls />
      </div>
    </div>
  );
}
