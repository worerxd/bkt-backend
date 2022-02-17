const express = require('express');

const expressConfig = require('./config/express')
const connectDB = require('./config/database')
const routes = require('./routes')
const swaggerDocs = require('./config/swagger');

const app = express();

expressConfig(app);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  // connect to database
  connectDB();

  // Routes
  routes(app);

  // Swagger
  swaggerDocs(app, 8080)

  console.log('server listening on port', PORT)
});

module.exports = { app, server };
