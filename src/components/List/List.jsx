import Card from '../Card/Card';

import './list.css';

export default function List({ list }) {
  return (
    <ul className="list__list">
      {list?.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </ul>
  );
}
