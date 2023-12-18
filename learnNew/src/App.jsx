import "./App.css";
import CounterToDo from "./components/Counter&ToDo";
import CartsSystem from "./components/CartsSystem";

function App() {
  return (
    <div className="appWrapper">
      <CartsSystem />
      <CounterToDo />
    </div>
  );
}

export default App;
