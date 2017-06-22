const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello, hello!")
});

app.get('/line2', (req, res) => {
  res.send("I don't know why you say goodbye!")
});

app.get('/line3', (req, res) => {
  res.send("I say helloooo-o-ooo-o-ooooooooooo!")
});

app.get('/r/:subredditName', (req, res) => {  //placing a ':' before 'subredditName' made it into a variable
  let subreddit = req.params.subredditName;
  res.send("Welcome to the " + subreddit.toUpperCase() + " Fake Subreddit!")
});

app.get('/r/:subredditName/comments/:id/:title', (req, res) => {
  res.send("Welcome to fake, empty reddit's comments!")
});

//this is a 'catch-all', and must follow all legitimate routes in the script
app.get('*', (req, res) => {
  res.send("404, page not found! Please try /, line2, or line3!")
});

app.listen(3000, () => {        //() => === function() in es6
  console.log("App running on port 3000")
});
