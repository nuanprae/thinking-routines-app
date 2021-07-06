import Button from '../Button/Button';

import './card.css';

export default function Card({ item, onClick }) {
  return (
    <li className="card">
      {item.content}
      <Button className="card__button" icon="-" onClick={onClick} />
    </li>
  );
}
