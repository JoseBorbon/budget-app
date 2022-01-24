const transactions = require(`${__dirname}/../models/transactions`);

exports.checkQuery = (req, res, next) => {
  if (JSON.stringify(req.query) === '{}') return res.json(transactions);
  next();
};

exports.getTransaction = (req, res) => {
  const idx = Number(req.params.arrayIndex);
  if (!transactions[idx]) res.redirect('/invalid');
  res.json(transactions[idx]);
};

exports.createTransaction = (req, res) => {
  transactions.push(req.body);
  res.status(201).json(transactions[transactions.length - 1]);
};

exports.deleteTransaction = (req, res) => {
  const idx = Number(req.params.arrayIndex);
  transactions.splice(idx, 1);
  res.status(204).json(transactions);
};

exports.updateTransaction = (req, res) => {
  const idx = Number(req.params.arrayIndex);
  transactions[idx] = req.body;
  response.status(200).json(transactions[idx]);
};
