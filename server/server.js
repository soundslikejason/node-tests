const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

// GET /users
// Give users a name prop and age prop
app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Joey',
      age: 32
    },
    {
      name: 'Patricia',
      age: 21
    },
    {
      name: 'Sophia',
      age: 18
    }
  ]);
});

app.listen(3000);
module.exports.app = app;