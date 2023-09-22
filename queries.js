const express = require ('express');
const mysql = require('mysql'); 
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'test', 
});

app.get('/api_blog',(req,res)=>{
   const category=req.params.category;
   // const sql="SELECT * from api_blog WHERE Headlines";

    db.query(sql,[api_blog],(err,data)=>{
        if(err) throw err;
        console.log(data)
        return res.json(data)
    })
});

app.post('/api_blog', (req, res) => {
  const newUser = req.body;
 db.query(
    'INSERT INTO user_register ( Headlines,image,description,date, created_at, updated_at) VALUES ("jkgkjkkhk","https://www.india.com/wp-content/uploads/2023/05/829469-28afp-afp1h0253.jpg","hgjddcjdcjdc","01/10/1999", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)'
    [newUser.Headlines, newUser.description,newUser.image,newUser.date],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
        return;
      }
      newUser.id = results.insertId;
      res.status(201).json(newUser);
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
