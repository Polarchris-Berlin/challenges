export default function App() {
  return <Greeting name="Sven" />;
}

function Greeting({ name }) {
  const coaches = ["Niklas", "Esraa", "Sven"];

  const isCoach = coaches.includes(name);

  return <h1>Hello, {isCoach ? "Coach" : name}!</h1>;
}
