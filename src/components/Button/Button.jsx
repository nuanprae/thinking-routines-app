import classNamesHelper from 'classnames';

import './button.css';

export default function Button({ className, onClick, icon }) {
  return (
    <button className={classNamesHelper('button', className)} onClick={onClick} type="submit">
      {icon}
    </button>
  );
}
