export default function App() {
  return <SUM valueA={5} valueB={5} />;
}

function SUM({ valueA, valueB }) {
  const result = valueA + valueB;

  return (
    <p>
      {valueA} + {valueB} = {result}
    </p>
  );
}
