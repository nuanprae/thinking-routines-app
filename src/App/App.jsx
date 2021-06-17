import { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import './App.css';

function App() {
  const [content, setContent] = useState('');
  return (
    <div className="App">
      <header>
        <h1>Thinking Routines</h1>
      </header>
      <section>
        <h3>I used to think...</h3>
        <Form content={content} setContent={setContent} />
      </section>
    </div>
  );
}

export default App;
