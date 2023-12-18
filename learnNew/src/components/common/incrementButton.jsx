import { useStore } from "../../hooks/BearCounter";
import "../../App.css";

export function Controls() {
  const { increasePopulation, removeAllBears } = useStore();

  return (
    <div className="buttonWrapper">
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>Clear</button>
    </div>
  );
}
