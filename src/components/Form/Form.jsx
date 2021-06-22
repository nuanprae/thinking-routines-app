import axios from 'axios';

import Button from '../Button/Button';

import './form.css';

export default function Form({ content, setContent, list, setList }) {
  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/insert', { content: content });
    setContent('');
    const fetchData = async () => {
      try {
        const apiCallResponse = await axios.get(
          'http://localhost:8000/api/get/used-to-think/recently-added-item',
        );
        setList([...list, apiCallResponse.data[0]]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <form className="form">
      <textarea
        className="form__input-text"
        name="content"
        onChange={handleContent}
        placeholder="Add your thinking"
        type="text"
        value={content}
      ></textarea>
      <Button icon="+" onClick={handleSubmit} />
    </form>
  );
}
