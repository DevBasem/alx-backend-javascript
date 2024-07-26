const express = require('express');

const app = express();
const PORT = 7865;

// Route for the root
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// Route for cart with id validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// 404 for routes that do not match
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
