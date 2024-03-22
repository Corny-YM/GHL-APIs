const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.get("/initiate", require("./lib/initiate"));

// app.get("/refresh", require("./lib/refresh"));

app.get("/oauth/callback", require("./lib/callback"));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port: ${port}!`);
});
