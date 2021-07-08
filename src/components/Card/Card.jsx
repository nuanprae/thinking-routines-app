import PropTypes from 'prop-types';

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
Card.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
};
