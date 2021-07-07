import axios from 'axios';
import { useState, useEffect } from 'react';

import Button from '../Button/Button';

import './form.css';

export default function Form({ list, setList, name, textInput, setTextInput }) {
  const [numberOfItems, setNumberOfItems] = useState(null);

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
  }, [numberOfItems, setList]);

  const handleTextInput = (event) => {
    setTextInput({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/insert', { content: textInput });
    setTextInput('');
    setNumberOfItems(list.length);
    console.log(list.length);
  };

  return (
    <form className="form">
      <textarea
        className="form__input-text"
        name={name}
        onChange={handleTextInput}
        placeholder="Add your thinking"
        type="text"
        value={textInput}
      ></textarea>
      <Button icon="+" onClick={handleSubmit} />
    </form>
  );
}
