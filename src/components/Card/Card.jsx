import Button from '../Button/Button';

import './card.css';

export default function Card({ item, onClick }) {
  return (
    <li className="card">
      {item.content}
      <Button icon="-" onClick={onClick} />
    </li>
  );
}
