const fetch = require("node-fetch");

class JphUsersApi {
    constructor() {

    }
    fetchUsers() {
        return fetch("https://jsonplaceholder.typicode.com/users");
    }
}

module.exports = new JphUsersApi();