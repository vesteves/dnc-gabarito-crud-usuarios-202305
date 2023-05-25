// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            port : 3306,
            user : 'user',
            password : 'password',
            database : 'gabarito_db',
        }
    },
};
