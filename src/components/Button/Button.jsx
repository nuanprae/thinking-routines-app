import './button.css';

export default function Button({ onClick, icon }) {
  return (
    <button className="button" onClick={onClick} type="submit">
      {icon}
    </button>
  );
}
