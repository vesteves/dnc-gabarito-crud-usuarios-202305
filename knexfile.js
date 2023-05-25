require('dotenv').config();
const database = require('./src/config/database');
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: database,
};
