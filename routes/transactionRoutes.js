//Dependencies
const express = require('express');
const transactionController = require(`${__dirname}/../controllers/transactionController`);

//Configuration
const transactions = express.Router();

transactions
  .route('/')
  .get(transactionController.checkQuery)
  .post(transactionController.createTransaction);

transactions
  .route('/:arrayIndex')
  .get(transactionController.getTransaction)
  .put(transactionController.updateTransaction)
  .delete(transactionController.deleteTransaction);

module.exports = transactions;
