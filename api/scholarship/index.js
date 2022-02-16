const { Router } = require('express');

const {
  createScholarshipHandler,
  getAllScholarshipsHandler,
  getScholarshipByIdHandler
} = require('./scholarship.controller');

const router = Router();

router.get('/', getAllScholarshipsHandler);
router.get('/:id', getScholarshipByIdHandler);
router.post('/', createScholarshipHandler);

module.exports = router;
