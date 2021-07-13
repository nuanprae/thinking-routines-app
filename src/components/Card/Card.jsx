import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './card.css';

export default function Card({ backgroundColor, item, onClick }) {
  return (
    <li className="card" style={{ backgroundColor: backgroundColor }}>
      {item.content}
      <Button className="card__button" icon="-" onClick={onClick} />
    </li>
  );
}
Card.propTypes = {
  backgroundColor: PropTypes.string,
  item: PropTypes.object,
  onClick: PropTypes.func,
};
