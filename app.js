///Dependencies
const express = require('express');
const cors = require('cors');
const transactionRouter = require(`${__dirname}/routes/transactionRoutes`);
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Budget App!');
});

app.use('/transactions', transactionRouter);

app.get('*', (req, res) => {
  res.json({
    status: 'fail',
    error: 'Page Not Found',
  });
});

module.exports = app;
