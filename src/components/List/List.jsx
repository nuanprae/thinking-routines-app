import './list.css';

export default function List({ list }) {
  return (
    <ul className="list__list">
      {list?.map((item) => {
        return (
          <li className="list__item" key={item.id}>
            {item.content}
          </li>
        );
      })}
    </ul>
  );
}
