const path = require('path');
const express = require('express');


const PORT = process.env.PORT || 3000 ;
const public_path = path.join(__dirname, '/../public')
const app = express();

app.use(express.static(public_path));
app.listen(PORT, ()=>{
  console.log(`Server is up at port ${PORT}`)});