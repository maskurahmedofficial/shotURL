const express = require('express')
const { urlController } = require('../../controllers/urlController')
const runUrlController = require('../../controllers/runUrl')
const urlApi = express()

urlApi.post('/getURL',urlController)
urlApi.get('/:shortId',runUrlController)
module.exports = urlApi