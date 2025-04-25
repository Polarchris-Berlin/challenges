import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(1);

  function handleAdd() {
    setPeople((prev) => prev + 1);
  }

  function handleSubtract() {
    setPeople((prev) => (prev > 0 ? prev - 1 : 0));
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={handleAdd} onSubtract={handleSubtract} />
      <p>
        You are going to reserve a table for {people}{" "}
        {people === 1 ? "person" : "people"}.
      </p>
    </div>
  );
}
