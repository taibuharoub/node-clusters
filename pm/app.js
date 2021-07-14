const express = require("express");
const fabObj = require("../math-logic/fibonacci-series");

const app = express();

//http://localhost:3000?number=20
app.get("/", (req, res, next) => {
  console.log(`Worker ID is- ${process.pid}`);
  let number = fabObj.calculateFibonacciValue(
    Number.parseInt(req.query.number)
  );
  res.send(`<h1>${number}</h1>`);
});

app.listen(3000, () => {
  console.log(`Server at http://localhost:3000`);
});
