'use strict';

const express = require('express');
const path = require('path');

const app = express();

const host = '127.0.0.1';
const port = 8080;

app.use(
  '/home', 
  express.static(path.resolve(__dirname, 'public', 'home'))
);

app.use(
  '/about', 
  express.static(path.resolve(__dirname, 'public', 'about'))
);

app.listen(port, host, () => {
  console.log(`Server listen http://${host}:${port}`);
})