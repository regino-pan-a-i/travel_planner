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


/***********************************
 * Middleware
 * ********************************/

app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/', router);

/***********************************
 * Server Listener
 * ********************************/
const port = process.env.Port || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})