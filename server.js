const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Jules!')
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
})
