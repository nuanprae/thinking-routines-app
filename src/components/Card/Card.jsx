import './card.css';

export default function Card({ item }) {
  return <li className="card">{item.content}</li>;
}
