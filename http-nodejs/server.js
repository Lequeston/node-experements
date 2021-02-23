'use strict';

const http = require('http');

const notFound = (response) => {
  response.statusCode = 404;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Not found\n');
}

const successFound = (response, body) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end(body + '\n');
}

const server = http.createServer((request, response) => {
  switch (request.method) {
    case 'GET':
      switch(request.url){
        case '/home':
          successFound(response, 'Home Page');
          break;
        case '/about':
          successFound(response, 'About Page');
          break;
        default: 
          notFound(response);
          break;
      }
      break;
    case 'POST':
      switch(request.url) {
        case '/api/admin':
          successFound(response, 'Create admin request');
          break;
        case '/api/user':
          successFound(response, 'Create user request');
          break;
        default:
          notFound(response);
          break;
      }
      break;
    default:
      notFound(response);
      break;
  }
});

const start = (port, host) => {
  server.listen(port, host, () => {
    console.log(`Server listen http://${host}:${port}`);
  })
}

exports.start = start;