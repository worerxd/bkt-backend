const {
  createScholarship,
  getAllScholarships,
  getScholarshipById
} = require('./scholarship.service');

async function getAllScholarshipsHandler(req, res) {
  try {
    const scholarships = await getAllScholarships();
    return res.status(200).json(scholarships)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

async function createScholarshipHandler(req, res) {
  try {
    const scholarshipCreated = await createScholarship(req.body)
    return res.status(201).json(scholarshipCreated)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

async function getScholarshipByIdHandler(req, res) {
  try {
    const { id } = req.params;
    const scholarship = await getScholarshipById(id);
    if (!scholarship) {
      return res.status(404).json({
        message: `Scholarship not found with id: ${id}`
      })
    }
    return res.status(200).json(scholarship);
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllScholarshipsHandler,
  createScholarshipHandler,
  getScholarshipByIdHandler
}
