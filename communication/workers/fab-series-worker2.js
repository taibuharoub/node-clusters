const fabObj = require("../../math-logic/fibonacci-series");

process.on('message', number=>{
    let fabNum = fabObj.calculateFibonacciValue(number);
    console.log(`Fibonacci-series - 2 PID is ${process.pid}`);
    process.send(fabNum);
});
