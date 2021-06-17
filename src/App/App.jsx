import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import './App.css';

function App() {
  const [content, setContent] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/get/used-to-think').then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Thinking Routines</h1>
      </header>
      <section>
        <h3>I used to think...</h3>
        <Form content={content} setContent={setContent} list={list} setList={setList} />
      </section>
      <section>
        {list?.map((item) => {
          return (
            <ul>
              <li key={`item-${item.id}`}>{item.content}</li>
            </ul>
          );
        })}
      </section>
    </div>
  );
}

export default App;
