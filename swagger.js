
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Users Api',
    description: 'Users Api'
  },
  host: 'project2-dgm3.onrender.com',
  schemes: [
    'https'
]
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, endpointsFile, doc);