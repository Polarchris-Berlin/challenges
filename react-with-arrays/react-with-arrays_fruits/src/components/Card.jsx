import "./Card.css";

export default function Card({ name, color }) {
  const className = `card card--${color}`;
  return <p className={className}>{name}</p>;
}
