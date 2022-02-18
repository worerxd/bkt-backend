const { Router } = require('express');

const {
  createScholarshipHandler,
  getAllScholarshipsHandler,
  getScholarshipByIdHandler,
  updateScholarshipStateHandler
} = require('./scholarship.controller');

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Scholarship:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The id of the scholarship
 *        title:
 *          type: string
 *          description: The title of the Scholarship
 *        hoster:
 *          type: string
 *          description: The name of the org offering the scholarship
 *        description:
 *          type: string
 *          description: The description of the scholarship
 *        date:
 *          type: object
 *          properties:
 *            start:
 *              type: string
 *              format: date
 *              description: The start date for the inscriptions
 *            end:
 *              type: string
 *              format: date
 *              description: The end date for the inscriptions
 *          description: The dates for the inscriptions
 *        tags:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *        target:
 *          type: object
 *          properties:
 *            directedTo:
 *              type: string
 *              description: The persons that the scholarship is directed to
 *            fromUniversity:
 *              type: string
 *              description: The universities of the persons that the scholarship is directed to
 *        duration:
 *          type: string
 *          description: The duration of the program
 *        spots:
 *          type: integer
 *          description: the numbers of spots for the scholarship
 *        requirements:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *              description: The title of the list of requirements
 *            list:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  item:
 *                    type: string
 *      required:
 *        - title
 *        - hoster
 *        - description
 *        - date
 *        - tags
 *        - target
 *        - duration
 *        - spots
 *        - requirements
 *      example:
 *        title: Scholarship test from Swagger
 *        hoster: Swagger
 *        description: A Scholarship test from Swagger to all the students...
 *        date:
 *          start: 2022-02-17T06:47:12.480Z
 *          end: 2022-03-17T06:47:12.480Z
 *        tags:
 *          -
 *            name: women
 *          -
 *            name: online
 *        target:
 *          directedTo: Students from everywhere
 *          fromUniversity: Any University
 *        duration: 2 months
 *        spots: 50
 *        requirements:
 *          title: Eligibility criteria
 *          list:
 *            -
 *              item: Women managers to mid-level managers looking to progress in their care...
 *            -
 *              item: Resident in any of the following countries
 *
 */

/**
 *  @swagger
 *  /api/scholarships:
 *    post:
 *      summary: create a new scholarship
 *      tags: [Scholarship]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Scholarship'
 *      responses:
 *        200:
 *          description: new scholarship has been created!
 */
router.post('/', createScholarshipHandler);

/**
 *  @swagger
 *  /api/scholarships:
 *    get:
 *      summary: return all scholarships
 *      tags: [Scholarship]
 *      responses:
 *        200:
 *          description: all scholarships
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Scholarship'
 */
router.get('/', getAllScholarshipsHandler);

/**
 *  @swagger
 *  /api/scholarships/{id}:
 *    get:
 *      summary: return one scholarship
 *      tags: [Scholarship]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: the scholarship id
 *      responses:
 *        200:
 *          description: a scholarship
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Scholarship'
 *        404:
 *          description: scholarship not found
 */
router.get('/:id', getScholarshipByIdHandler);

/**
 *  @swagger
 *  /api/scholarships/{id}:
 *    patch:
 *      summary: return one scholarship with a diferent state
 *      tags: [Scholarship]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: the scholarship id
 *      responses:
 *        200:
 *          description: the state of the scholarship has been changed
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Scholarship'
 *        404:
 *          description: scholarship not found
 */
router.patch('/:id', updateScholarshipStateHandler)

module.exports = router;
