import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 Banana", color: "yellow" },
    { id: 1, name: "🍏 Apple", color: "green" },
    { id: 2, name: "🍊 Orange", color: "orange" },
    { id: 3, name: "🍓 Stawberry", color: "red" },
    { id: 4, name: "🫐 Blueberry", color: "blue" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
