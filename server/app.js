const express = require('express');

const app = express();
const connection = require('./conn')
const PORT = 3000;


app.use(express.json());

app.get('/hello', (req, res)=>{
    res.json({"message":"Hello"})
})

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
  });
