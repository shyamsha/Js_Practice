const express = require("express");
const path = require("path");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=166400");
  res.setHeader("Expires", "Tue, 05 Mar 2024 23:20:39 GMT");
  next();
});
app.use(
  express.static(path.join(__dirname, "public"), {
    cacheControl: false,
    etag: true,
    lastModified: true,
  })
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server is running on port", port);
});
