import { useState } from 'react';

import Form from '../components/Form/Form';
import List from '../components/List/List';

import './app.css';

function App() {
  const [textInput, setTextInput] = useState({ usedToThink: '', nowIThink: '' });
  const { usedToThink, nowIThink } = textInput;
  const [usedToThinkList, setUsedToThinkList] = useState([]);
  const [nowIThinkList, setNowIThinkList] = useState([]);

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
            apiEndPointToFetchData="http://localhost:8000/api/get/used-to-think"
            apiEndPointToInsertData="http://localhost:8000/api/insert/used-to-think"
            list={usedToThinkList}
            setList={setUsedToThinkList}
            name="usedToThink"
            textInput={usedToThink}
            setTextInput={setTextInput}
          />
          <List
            apiEndPointToDeleteData="http://localhost:8000/api/delete/used-to-think/"
            apiEndPointToFetchData="http://localhost:8000/api/get/used-to-think"
            list={usedToThinkList}
            setList={setUsedToThinkList}
          />
        </section>
        <section className="app__right-column">
          <h3>Now I think...</h3>
          <Form
            apiEndPointToFetchData="http://localhost:8000/api/get/now-i-think"
            apiEndPointToInsertData="http://localhost:8000/api/insert/now-i-think"
            list={nowIThinkList}
            setList={setNowIThinkList}
            name="nowIThink"
            textInput={nowIThink}
            setTextInput={setTextInput}
          />
          <List
            apiEndPointToDeleteData="http://localhost:8000/api/delete/now-i-think/"
            apiEndPointToFetchData="http://localhost:8000/api/get/now-i-think"
            list={nowIThinkList}
            setList={setNowIThinkList}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
