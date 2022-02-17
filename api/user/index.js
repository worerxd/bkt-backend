const { Router } = require('express');

const {
  createUserHandler,
  getAllUsersHandler
} = require('./user.controller');

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);

module.exports = router;
