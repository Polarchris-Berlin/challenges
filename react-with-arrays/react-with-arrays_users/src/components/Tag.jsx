import "./Tag.css";

export default function Tag({ tag }) {
  const isAdmin = tag === "admin";
  const tagClass = isAdmin ? "tag tag--highlight" : "tag";

  return <li className={tagClass}>{tag}</li>;
}
