'use strict';

const fs = require('fs');
const path = require('path');

const files = path.resolve(__dirname, 'files');
const test1 = path.resolve(files, 'test1.txt');
const test2 = path.resolve(files, 'test2.txt');
const long = path.resolve(files, 'long.txt');

const writeFiles = path.resolve(__dirname, 'writeFiles');
const writeTest1 = path.resolve(writeFiles, 'test1.txt');
const writeTest2 = path.resolve(writeFiles, 'test2.txt');

//синхронное чтение и запись
try {
  const content1 = fs.readFileSync(test1, 'utf8');
  const dir1 = fs.readdirSync(files, 'utf8');

  console.log(content1);
  console.table(dir1);

  
} catch(e) {
  console.error(e);
}

//асинхронное чтение 
fs.readFile(test2, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
})

fs.readdir(files, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else { 
    console.table(data);
  }
})

//чтение файла потоком 
const stream = fs.createReadStream(long, {
  encoding: 'utf8',
  mode: 0o666,
  autoClose: true
});

stream.on('data', (data) => {
  console.log('--------------------------------------------------------------------------------');
  console.log(data);
});
stream.on('error', (err) => console.error(err));