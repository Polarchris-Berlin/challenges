import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;

  function HelloWorldArticle() {
    return (
      <article>
        <h1>Amazing Headline</h1>
        <p>
          Followed by an amazing article about amazing headlines. Isn`t this
          great?
        </p>
      </article>
    );
  }
}
