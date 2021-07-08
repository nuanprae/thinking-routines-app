import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import './button.css';

export default function Button({ className, icon, onClick }) {
  return (
    <button className={classNamesHelper('button', className)} onClick={onClick} type="submit">
      {icon}
    </button>
  );
}
Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
};
