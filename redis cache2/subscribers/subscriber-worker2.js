const redis = require("redis");

const keys = require("../keys");
const fibonacciSeriesObj = require("../math-logic/fibonacci-series");

let subscriber = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort
});

subscriber.subscribe("math-subscription2");

subscriber.on("message", (channel, message) => {
    let seriesValue = fibonacciSeriesObj.calculateFibonacciValue(Number.parseInt(message));
    console.log(`Fibonacci series value is ${seriesValue}`);
});