const fetch = require("node-fetch");

class JphPostsApi {
    constructor() {

    }
    fetchPosts() {
        return fetch("https://jsonplaceholder.typicode.com/posts");
    }
}

module.exports = new JphPostsApi();