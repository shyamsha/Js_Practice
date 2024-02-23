const express = require("express");
const { join } = require("node:path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});
app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.write(`data: Welcome to sever sent events \n\n`);
  const intervalId = setInterval(() => {
    res.write(`data: server time ${new Date().toLocaleDateString()} \n\n`);
  }, 5000);
  req.on("close", () => {
    clearInterval(intervalId);
  });
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
