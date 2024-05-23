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
// const swaggerDocument = require('./swagger.json');
const cors = require('cors');
const app = express();


/***********************************
 * Middleware
 * ********************************/


app.use('/', (req, res, next) => {
    res.send('Welcome to the Travel Planner API');
})

/***********************************
 * Server Listener
 * ********************************/
const port = process.env.Port || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})