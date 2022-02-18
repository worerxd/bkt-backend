const { Router } = require('express');

const { getAllDevicesHandler, createDeviceHandler } = require('./device.controller');

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Device:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The id of the device
 *        token:
 *          type: string
 *          description: Token of the device
 *      required:
 *        - token
 *      example:
 *        token: ExponentPushToken[T0E6y9IQmuIekizSfuYqp5]
 *
 */

/**
 *  @swagger
 *  /api/devices:
 *    post:
 *      summary: create a new device
 *      tags: [Device]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Device'
 *      responses:
 *        200:
 *          description: new device has been created!
 */
router.post('/', createDeviceHandler);

/**
 *  @swagger
 *  /api/devices:
 *    get:
 *      summary: return all devices
 *      tags: [Device]
 *      responses:
 *        200:
 *          description: all devices
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Device'
 */
router.get('/', getAllDevicesHandler);

module.exports = router;
