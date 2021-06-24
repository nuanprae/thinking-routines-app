import axios from 'axios';
import { useState, useEffect } from 'react';

import Card from '../Card/Card';

import './list.css';

export default function List({ list, setList }) {
  const [deletedItem, setDeletedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCallResponse = await axios.get('http://localhost:8000/api/get/used-to-think');
        setList(apiCallResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [deletedItem, setList]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/delete/used-to-think/${id}`);
    setDeletedItem(id);
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
