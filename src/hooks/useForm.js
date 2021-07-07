import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useForm(
  apiEndPointToFetchData,
  apiEndPointToInsertData,
  list,
  setList,
  textInput,
  setTextInput,
) {
  const [numberOfItems, setNumberOfItems] = useState(null);

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
  }, [numberOfItems, setList, apiEndPointToFetchData]);

  const handleTextInput = (event) => {
    setTextInput({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(apiEndPointToInsertData, { content: textInput });
    setTextInput('');
    setNumberOfItems(list.length);
    console.log(list.length);
  };
  return { handleTextInput, handleSubmit };
}
