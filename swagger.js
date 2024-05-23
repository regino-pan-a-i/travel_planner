const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: 
    {
        title: "API Documentation",
        description: "This is the API documentation for the Travel Planner application.",
    },
    host: "localhost:3000",
}

const outputFile = './swagger_output.json';
const routes = ['./routes/router.js'];


swaggerAutogen(outputFile, routes, doc)
