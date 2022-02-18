const { Router } = require('express');

const {
  createUserHandler,
  getAllUsersHandler
} = require('./user.controller');

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The id of the user
 *        fullName:
 *          type: string
 *          description: The fullname of the user
 *        email:
 *          type: string
 *          description: The email of the user
 *        password:
 *          type: string
 *          description: The password of the user
 *        role:
 *          type: string
 *          description: The role of the user
 *      required:
 *        - fullName
 *        - email
 *        - password
 *      example:
 *        fullName: Walther Vergaray
 *        email: walther.vergaray@gmail.com
 *        password: 123456
 *
 */

/**
 *  @swagger
 *  /api/users:
 *    post:
 *      summary: create a new user
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          description: new user has been created!
 */
router.post('/', createUserHandler);

/**
 *  @swagger
 *  /api/users:
 *    get:
 *      summary: return all users
 *      tags: [User]
 *      responses:
 *        200:
 *          description: all users
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/User'
 */
router.get('/', getAllUsersHandler);

module.exports = router;
