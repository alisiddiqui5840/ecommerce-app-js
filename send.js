const db = require('./server');
const express = require('express');
const app = express();

const port = 3050; // Change this to the appropriate port



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });