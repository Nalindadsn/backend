const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json({
    message: 'hello bk',
  });
});

app.listen(3000);
