const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();
app.use(bodyParser.json());
app.use(express.static('./public'));

consign()
    .include('models')
    .then('resources').into(app);

module.exports = app;