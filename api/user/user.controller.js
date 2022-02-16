const {
  createUser,
} = require('./user.service');

async function createUserHandler(req, res) {
  try {
    const userCreated = await createUser(req.body)
    return res.status(201).json(userCreated)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createUserHandler,
}
