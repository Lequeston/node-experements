const express = require('express');

const app = express();

app.get('/home', (req, res) => {
  res.status(200).type('text/plain');
  res.send('Home page');
})

app.get('/about', (req, res) => {
  res.status(200).type('text/plain');
  res.send('About page');
})

app.post('/api/admin', (req, res) => {
  res.status(200).type('text/plain');
  res.send('Create admin request');
})

app.post('/api/user', (req, res) => {
  res.status(200).type('text/plain');
  res.send('Create user request');
})

app.use((req, res, next) => {
  res.status(404).type('text/plain');
  res.send('Not found');
})

const start = (port, host) => {
  app.listen(port, host, () => {
    console.log(`Server listen http://${host}:${port}`);
  })
}

exports.start = start;
