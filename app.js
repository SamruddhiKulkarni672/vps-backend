const express = require('express')
const app = express()
const SchoolRoute = require("./routes/routes")
 
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use("/school",SchoolRoute);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

 
  
  module.exports = app;
  