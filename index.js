require('dotenv').config();
const express = require('express');
const knex = require('./service/knex');

const app = express();

app.use(express.json());

app.get('/user', async (req, res) => {
    const users = await knex('users').select();

    return res.status(200).json({
        message: 'ok',
        data: users,
    });
});

app.get('/user/:id', async (req, res) => {
    const user = await knex('users').select().where({ id: req.params.id }).first();

    return res.status(200).json({
        message: 'ok',
        data: user,
    });
});

app.post('/user', async (req, res) => {
    await knex('users').insert({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        phone: req.body.phone,
    });

    return res.status(200).json({
        message: 'ok',
    });
});

app.put('/user/:id', async (req, res) => {
    await knex('users').update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        phone: req.body.phone,
    }).where({ id: req.params.id });

    return res.status(200).json({
        message: 'ok',
    });
});

app.delete('/user/:id', async (req, res) => {
    await knex('users').delete().where({ id: req.params.id });

    return res.status(200).json({
        message: 'ok',
    });
});

app.listen(8080, () => {
    console.log('Server working!');
});
