const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Hola Mundo");
});

const port = 3030 || process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
