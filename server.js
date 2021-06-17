import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const database = mysql.createConnection({
  host: 'localhost',
  user: 'prae',
  password: 'mykomul1',
  database: 'thinking_routines',
});

app.post('/api/insert', (request, response) => {
  const content = request.body.content;
  const sqlInsert = 'INSERT INTO used_to_think (content) VALUES (?)';
  database.query(sqlInsert, content, (error, result) => {
    if (error) throw error;
    console.log(result);
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
