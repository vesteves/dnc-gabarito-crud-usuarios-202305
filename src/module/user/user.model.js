const knex = require('../../service/knex');

const TABLE = 'users';

const getUsers = () => {
    return knex(TABLE)
        .select();
}

const getUser = (id) => {
    return knex(TABLE)
        .select()
        .where({ id }).first();
}

const storeUser = ({
    name,
    email,
    password,
    address,
    phone
}) => {
    return knex(TABLE)
        .insert({
            name,
            email,
            password,
            address,
            phone
        });
}

const updateUser = (id, {
    name,
    email,
    password,
    address,
    phone
}) => {
    return knex(TABLE)
        .update({
            name,
            email,
            password,
            address,
            phone
        })
        .where({ id });
}

const deleteUser = (id) => {
    return knex(TABLE)
        .delete()
        .where({ id });
}

module.exports = {
    getUsers,
    getUser,
    storeUser,
    updateUser,
    deleteUser
}