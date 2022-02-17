const { Router } = require('express');

const {
  createScholarshipHandler,
  getAllScholarshipsHandler,
  getScholarshipByIdHandler
} = require('./scholarship.controller');

const router = Router();

// Get all the scholarships
/**
 * @swagger
 * components:
 *  schemas:
 *    Scholarship:
 *      type: object
 *      properties:
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
 *
 */
router.get('/', getAllScholarshipsHandler);
router.get('/:id', getScholarshipByIdHandler);
router.post('/', createScholarshipHandler);

module.exports = router;
