const express = require('express');
const multer = require('multer');
const upload = multer({
  dest: 'uploads/'
}); 

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', upload.single('file-to-upload'), (req, res) => {
  res.redirect('/');
});

app.listen(3000);