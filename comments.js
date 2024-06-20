// create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// create a comments array
const comments = [];

// get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// post a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// start server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});