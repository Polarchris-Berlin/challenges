import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">Best headline ever</h2>
      <label htmlFor="FirstName">First Name</label>
      <input id="FirstName" type="text"></input>
      <a href="https://de.wikipedia.org/wiki/Name" className="article__link">
        Link zu Wikipedia
      </a>
    </article>
  );
}
