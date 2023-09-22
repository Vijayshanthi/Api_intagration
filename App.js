const express = require('express');
const mysql = require('mysql'); 
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'test', 
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM api_blog', (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).send('Database error');
      return;
    }''
    res.json(results);
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
