const Scholarship = require('./scholarship.model');

/**
 * Get all scholarShips
 * @returns all scholarShips
 */

async function getAllScholarships() {
  const scholarships = await Scholarship.find();
  return scholarships;
}

/**
 * Create a new scholarShip
 * @param {Object} scholarship to create
 * @returns scholarship created
 */
async function createScholarship(scholarship) {
  const newScholarship = await Scholarship.create(scholarship);
  return newScholarship;
}

/**
 * Get scholarship by id
 * @param {string} id Indentifier of the scholarship to be filtered
 * @returns scholarship
*/
async function getScholarshipById(id) {
  const room = await Scholarship.findById(id);
  return room;
}

module.exports = {
  getAllScholarships,
  createScholarship,
  getScholarshipById
}
