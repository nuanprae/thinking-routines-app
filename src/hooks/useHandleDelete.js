import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useHandleDelete(apiEndPointToDelete, apiEndPointToFetchData, setList) {
  const [deletedItem, setDeletedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCallResponse = await axios.get(apiEndPointToFetchData);
        setList(apiCallResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [apiEndPointToFetchData, deletedItem, setList]);

  const handleDelete = (id) => {
    axios.delete(`${apiEndPointToDelete}${id}`);
    setDeletedItem(id);
  };
  return { handleDelete };
}
