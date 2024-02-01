const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
};

app.use(express.static(path.join(__dirname, 'build')));

https.createServer(options, app).listen(port, () => {
  console.log(`Servidor HTTPS escuchando en el puerto ${port}`);
});
