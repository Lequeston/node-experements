'use strict';

const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const host = '127.0.0.1';
const port = 8080;

app.engine(
  'handlebars',
  handlebars({
    defaultLayout: 'main',
    helpers: {
      getTitle: () => 'Greetings form Handlebars'
    }
  })
);

app.enable('view cache');

app.set('views', './views');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home', { 
    title: 'Greetings form Handlebars',
    content: 'Description how to use it handlebars',
    advantages: ['simple', 'flexible', 'powerful'],
    helpers: {
      getAdvantages: () => [
        'simple',
        'flexible',
        'powerful',
      ]
    }
  })
})

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About',
    layout: false
  })
})

app.listen(port, host, () => {
  console.log(`Server listen http://${host}:${port}`);
});