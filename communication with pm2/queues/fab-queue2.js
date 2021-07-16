const fabObj = require("../../math-logic/fibonacci-series");
const rq = require("amqplib/callback_api");

function sendValueInFabQueue2(num) {
    rq.connect("amqp://localhost", (err, connection) => {
        if (err) process.exit();
        const queueName = "FabSeries2";
        connection.createChannel((error, channel) => {
            if (error) {
                console.log(error);
                process.exit();
            }
            else {
                let fabNum = fabObj.calculateFibonacciValue(num);
                channel.assertQueue(queueName, { durable: false });
                channel.sendToQueue(queueName, Buffer.from(fabNum.toString()));
                console.log(`Queue Name is ${queueName}`);
            }
        });
    });
}

module.exports = sendValueInFabQueue2;