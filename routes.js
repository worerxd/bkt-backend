const scholarship = require('./api/scholarship');
const user = require('./api/user');
const authLocal = require('./auth/local');

// defining routes
function routes(app) {
  app.use('/api/users', user);
  app.use('/api/scholarships', scholarship);
  app.use('/auth/local', authLocal);
}

module.exports = routes;
