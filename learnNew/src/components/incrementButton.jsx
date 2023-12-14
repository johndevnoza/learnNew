import { useStore } from "../stateManagment/zustandTest";
import "../App.css";

export function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  return (
    <div className="buttonWrapper">
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>Clear</button>
    </div>
  );
}
