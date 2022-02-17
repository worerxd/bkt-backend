const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { version } = require('../package.json');

const routesApi = path.join(__dirname, '../api/**/index.js');

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'BKT API Documentation',
      version,
      description: 'Documentation for the endpoints used in this API',
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/',
      },
      contact: {
        name: 'Walther Vergaray',
        url: 'https://www.linkedin.com/in/vergaray-moreno-walther/',
        email: 'walther.vergaray@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local server',
      },
      {
        url: 'https://top-v17-backend.herokuapp.com',
        description: 'Heroku server',
      },
    ],
  },
  apis: [routesApi],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON Format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`📃🛠 Docs available at http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;
