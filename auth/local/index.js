const { Router } = require('express');

const {
  loginUserHandler,
  changePasswordHandler,
  verifyAccount,
} = require('./local.controller');

const router = Router();

router.post('/login', loginUserHandler);
router.post('/change-password', changePasswordHandler);
router.post('/confirm-account/:hash', verifyAccount);

module.exports = router;
