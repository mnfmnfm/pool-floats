const express = require('express');

const app = express();

// telling our server: where to listen and what to do when it happens
app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(3000);
