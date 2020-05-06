const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));
app.get("/api/hello", (req, res) => res.send("hello"));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
