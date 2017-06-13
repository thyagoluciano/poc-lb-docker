const express = require('express');
var os = require("os");

const app = express();

app.get('/', (req, res) => {
  res.send(`HELLO ${os.hostname()}`);
});

app.listen(process.env.PORT, () => {
  console.log(`App Listening on port ${process.env.PORT}`);
});