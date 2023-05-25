const knex = require('knex');
const database = require('../config/database')

let conn;

const singleton = () => {
    if (conn) {
        return conn;
    }
    conn = knex(database);
    return conn
}
module.exports = singleton();
