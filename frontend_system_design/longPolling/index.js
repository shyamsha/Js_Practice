const express = require("express");
const app = express();
let data = "Initial";
let waitListRes = [];
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/getData", (req, res) => {
  if (data !== req.query.lastData) {
    res.send({ data });
  } else {
    waitListRes.push(res);
  }
});
app.get("/updateData", (req, res) => {
  data = req.query.data;
  while (waitListRes.length > 0) {
    const client = waitListRes.pop();
    client.json({ data });
  }
  res.send({ data: "update successfully" });
});

const port = process.env.PORT || 5012;

app.listen(port, () => {
  console.log("server is running on port", port);
});
