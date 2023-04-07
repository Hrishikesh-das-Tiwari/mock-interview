const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const http = require('http');

const userRoutes = require('./routes/userRoutes');
const peerRoutes = require('./routes/peerRoutes');

const app = express();

app.enable('trust proxy');
app.use(cookie_parser());
app.use(
  cors({
    origin: [
      'http://127.0.0.1:3000',
      'http://localhost:3000',
      'http://localhost:5003',
    ],
    credentials: true,
  })
);

app.options('*', cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/', userRoutes);
app.use('/peers', peerRoutes);

module.exports = app;
