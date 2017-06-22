const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const routes = require('./routes');

// DB setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:auth/server-auth');

//app setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

routes(app);

//server setup
const PORT = process.env.port || 3000;
const server = http.createServer(app);
server.listen(PORT);

console.log(`Server is listening on port ${PORT}`);