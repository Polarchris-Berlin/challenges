import { volumes } from "../../lib/data";

export default function TheFellowshipOfTheRing() {
  const vol = volumes[0];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{vol.title}</h1>
      <p>{vol.description}</p>
      <img
        src={vol.cover}
        alt={vol.title}
        style={{ maxWidth: "50%", height: "auto" }}
      />

      <h2>Books</h2>
      <ul>
        {vol.books.map((book) => (
          <li key={book.ordinal}>
            <strong>{book.ordinal}:</strong> {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
