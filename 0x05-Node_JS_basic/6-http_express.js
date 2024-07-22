const express = require('express');

const PORT = 1245;
const app = express();

// Serve a plain text response for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle other paths with a 404 error page
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    <body>
      <pre>Cannot GET ${req.path}</pre>
    </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
