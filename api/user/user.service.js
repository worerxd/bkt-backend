const User = require('./user.model');

/**
 * Create a new user
 * @param {Object} user to create
 * @returns user created
 */
async function createUser(user) {
  const newUser = new User(user);
  const savedUser = await newUser.save();
  return savedUser;
}

/**
 * Get all users
 * @returns all users
 */
async function getAllUsers() {
  const scholarships = await User.find();
  return scholarships;
}

/**
 * Get user by query
 * @param {string} query Indentifier of the user to be filtered
 * @returns user
*/
async function findOneUser(query) {
  const user = await User.findOne(query);
  return user;
}

module.exports = {
  findOneUser,
  createUser,
  getAllUsers
}
