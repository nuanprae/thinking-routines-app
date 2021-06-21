import axios from 'axios';
import { useState, useEffect } from 'react';

import Form from '../components/Form/Form';
import List from '../components/List/List';
import './App.css';

function App() {
  const [content, setContent] = useState('');
  const [list, setList] = useState([]);

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
        <List list={list} />
      </section>
    </div>
  );
}

export default App;
