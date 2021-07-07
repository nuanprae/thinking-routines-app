import axios from 'axios';
import { useState, useEffect } from 'react';

import Form from '../components/Form/Form';
import List from '../components/List/List';

import './app.css';

function App() {
  const [textInput, setTextInput] = useState({ usedToThink: '', nowIThink: '' });
  const { usedToThink, nowIThink } = textInput;
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
  console.log(textInput);
  return (
    <div className="app">
      <header className="app__header">
        <h2>Thinking Routines</h2>
        <h3>I Used To Think... Now I Think...</h3>
      </header>
      <main className="app__main">
        <section className="app__left-column">
          <h3>I used to think...</h3>
          <Form
            textInput={usedToThink}
            setTextInput={setTextInput}
            list={list}
            setList={setList}
            name="usedToThink"
          />
          <List list={list} setList={setList} />
        </section>
        <section className="app__right-column">
          <h3>Now I think...</h3>
          <Form textInput={nowIThink} setTextInput={setTextInput} name="nowIThink" />
        </section>
      </main>
    </div>
  );
}

export default App;
