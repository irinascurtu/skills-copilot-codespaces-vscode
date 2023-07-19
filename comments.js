// Create web server using express
const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET request
// Path: /comments
// Send back a response with a list of comments
app.get('/comments', (req, res) => {
  res.send('This is a list of comments');
});

// Create a route for POST request
// Path: /comments
// Send back a response with a message
app.post('/comments', (req, res) => {
  res.send('You just called the post method at "/comments"!\n');
});

// Create a route for PUT request
// Path: /comments
// Send back a response with a message
app.put('/comments', (req, res) => {
  res.send('You just called the put method at "/comments"!\n');
});

// Create a route for DELETE request
// Path: /comments
// Send back a response with a message
app.delete('/comments', (req, res) => {
  res.send('You just called the delete method at "/comments"!\n');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});