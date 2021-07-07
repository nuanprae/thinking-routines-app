import axios from 'axios';
import { useState, useEffect } from 'react';
import useHandleDelete from '../../hooks/useHandleDelete';

import Card from '../Card/Card';

import './list.css';

export default function List({ apiEndPointToFetchData, list, setList }) {
  const { handleDelete } = useHandleDelete(
    'http://localhost:8000/api/delete/used-to-think/',
    apiEndPointToFetchData,
    setList,
  );

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
