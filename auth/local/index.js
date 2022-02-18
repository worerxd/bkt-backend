const { Router } = require('express');

const {
  loginUserHandler,
  changePasswordHandler,
  verifyAccount,
} = require('./local.controller');

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Auth:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: The email of the user
 *        password:
 *          type: string
 *          description: The password of the user
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: walther.vergaray@gmail.com
 *        password: 123456
 *
 */

/**
 *  @swagger
 *  /auth/local/login:
 *    post:
 *      summary: Log in
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Auth'
 *      responses:
 *        200:
 *          description: You have been logged in successfully!
 */
router.post('/login', loginUserHandler);
router.post('/change-password', changePasswordHandler);
router.post('/confirm-account/:hash', verifyAccount);

module.exports = router;
