const scholarship = require('./api/scholarship');
const user = require('./api/user');
const device = require('./api/device')
const authLocal = require('./auth/local');

// defining routes
function routes(app) {
  app.use('/api/users', user);
  app.use('/api/scholarships', scholarship);
  app.use('/api/devices', device);
  app.use('/auth/local', authLocal);
}

module.exports = routes;
