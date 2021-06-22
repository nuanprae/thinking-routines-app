import './card.css';

export default function Card({ item }) {
  return (
    <li className="card" key={item.id}>
      {item.content}
    </li>
  );
}
