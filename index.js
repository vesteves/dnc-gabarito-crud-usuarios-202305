require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

require('./src/routes')(app);

app.listen(8080, () => {
    console.log('Server working!');
});
