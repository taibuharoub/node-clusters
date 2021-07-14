const express = require("express");

const fabObj = require("./fibonacci-series");

const app = express();

//http://localhost:3000?number=10 
//numbers 10, 20, 2 high 45
app.get("/", (req, res, next) => {
    let number = fabObj.calculateFibonacciValue(Number.parseInt(req.query.number));
    res.send(`<h1>${number}</h1>`);
});

app.listen(3000, () => {
    console.log(`Server at http://localhost:3000`);
})