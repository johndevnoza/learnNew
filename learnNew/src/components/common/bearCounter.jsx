import { useStore } from "../../hooks/BearCounter";

export function BearCounter() {
  const { bears } = useStore();

  return <h1>{bears} around here...</h1>;
}
