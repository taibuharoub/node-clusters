const redis = require("redis");
const keys = require("./keys");
let client = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort
});
function redisMiddleware(req, res, next) {
    switch (req.url) {
        case "/posts":
            client.get("posts", (err, reply) => {
                if (err) res.status(500).send("<h4>Something went wrong!</h4>");
                if (reply !== null) {
                    res.send(reply);
                    console.log("from redis!")
                }
                else {
                    next();
                }
            });
            break;
        case "/users":
            client.get("users", (err, reply) => {
                if (err) res.status(500).send("<h4>Something went wrong!</h4>");
                if (reply !== null) {
                    res.send(reply);
                    console.log("from redis!")
                }
                else {
                    next();
                }
            });
            break;
        case "/comments":
            client.get("comments", (err, reply) => {
                if (err) res.status(500).send("<h4>Something went wrong!</h4>");
                if (reply !== null) {
                    res.send(reply);
                    console.log("from redis!")
                }
                else {
                    next();
                }
            });
            break;
    }
}

module.exports = redisMiddleware;