const express = require("express");
const app = express();
let data = "Initial";
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/getData", (req, res) => {
  res.send({ data });
});
app.get("/updateData", (req, res) => {
  data = "updated";
  res.send({ data });
});

const port = process.env.PORT || 5011;

app.listen(port, () => {
  console.log("server is running on port", port);
});
