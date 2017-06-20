const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

//app setup

//server setup
const PORT = process.env.port || 3000;
const server = http.createServer(app);
server.listen(PORT);

console.log(`Server is listening on port ${PORT}`);