const express = require("express");
const app = express();

const port = 3030;

app.listen(port, () => {
  console.log('server is running at 3030 port');
})

app.get('/',(req,res)=> {
    res.sendFile(__dirname + "/index.html")
})