const serverless = require('serverless-http');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const app = express();

const swaggerDocument = require('../../openapi.yml');

var options = {
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.7/swagger-ui.min.css'
    ],
    customJs: [
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.7/swagger-ui.min.js'
    ]
};

app.use('/documentation', swaggerUi.serveWithOptions({ redirect: false }), swaggerUi.setup(swaggerDocument, options))
//app.use('/documentation', swaggerUi.serve, swaggerUi.setup(null, options));

// Exportar la aplicación Express para su uso con serverless-http
module.exports.handler = serverless(app);