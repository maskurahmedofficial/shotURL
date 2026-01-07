const express = require('express');
const urlApi = require('./api/Url');
const route = express.Router()


route.use('/url',urlApi)

module.exports = route;