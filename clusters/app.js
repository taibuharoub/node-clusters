const cluster = require("cluster");
const totalCPUs = require("os").cpus().length;
const express = require("express");
const fabObj = require("../math-logic/fibonacci-series");

if (cluster.isMaster) {
  console.log(`Total Number of CPUs count is ${totalCPUs}`);

  for (var i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
  cluster.on("online", (worker) => {
    console.log(`Worker Id is ${worker.id} and PID is ${worker.process.pid}`);
  });
  cluster.on("exit", (worker) => {
    console.log(
      `Worker Id is ${worker.id} and PID is ${worker.process.pid} is offline`
    );
    console.log("Let's fork new worker!");
    cluster.fork();
  });
} else {
  const app = express();

  //http://localhost:3000?number=20
  app.get("/", (req, res, next) => {
    console.log(
      `Worker Process Id - ${cluster.worker.process.pid} has accepted the request!`
    );
    let number = fabObj.calculateFibonacciValue(
      Number.parseInt(req.query.number)
    );
    res.send(`<h1>${number}</h1>`);
  });

  app.listen(3000, () => {
    console.log(`Server at http://localhost:3000`);
  });
}
