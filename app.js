/***********************************
 * This app.js file is the primary file of the
 * application.
 **********************************/

/***********************************
 * Require Statements
 * ********************************/
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
const cors = require('cors');
const app = express();
const router = require('./routes/router');
const utilities = require("./utilities/index");
require('./utilities/auth');
const connect = require('./database/connect')

/***********************************
 * Middleware
 * ********************************/

// connect();
app.use(cors());

app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/', router);

/* ***********************
* Express Error Handler
*************************/
app.use(async (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    console.error(`Error at: "${req.originalUrl}": ${err.message}`)
    res.status(err.statusCode).json({ 
        status: err.statusCode,
        message: err.message })
})

/***********************************
 * Server Listener
 * ********************************/
const port = process.env.Port || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})