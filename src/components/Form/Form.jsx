import axios from 'axios';

export default function Form({ content, setContent, list, setList }) {
  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/insert', { content: content });
    setContent('');
    setList([...list, { content: content }]);
  };

  return (
    <form>
      <input
        name="content"
        onChange={handleContent}
        placeholder="Add your thinking"
        type="text"
        value={content}
      ></input>
      <button onClick={handleSubmit} type="submit">
        Add
      </button>
    </form>
  );
}
