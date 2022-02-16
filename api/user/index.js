const { Router } = require('express');

const {
  createUserHandler,
} = require('./user.controller');

const router = Router();

router.post('/', createUserHandler);

module.exports = router;
