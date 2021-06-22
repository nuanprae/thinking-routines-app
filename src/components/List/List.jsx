import axios from 'axios';

import Card from '../Card/Card';

import './list.css';

export default function List({ list, setList }) {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/delete/used-to-think/${id}`);
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <ul className="list__list">
      {list?.map((item) => {
        return (
          <Card
            item={item}
            key={item.id}
            onClick={() => {
              handleDelete(item.id);
            }}
          />
        );
      })}
    </ul>
  );
}
