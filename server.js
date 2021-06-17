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

// app.get('/api/insert', (request, response) => {
//   const sqlInsert = "INSERT INTO used_to_think (content) VALUES ('Cats hate water.');";
//   database.query(sqlInsert, (error, result) => {
//     if (error) throw error;
//     console.log(result);
//     response.send('inserted');
//   });
// });

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
