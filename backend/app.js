const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();

const connectDB = require('./database/db');
connectDB();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Namaste Dunia!');
});

module.exports = app;