const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const config = require('../../config')

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: config.userRoles,
    default: 'user',
  },
}, {
  timestamps: true,
})

UserSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (!user.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
})

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;

  return await bcrypt.compare(candidatePassword, user.password);
}

UserSchema.virtual('profile').get(function () {
  const {
    fullName,
    email,
    role,
  } = this;
  return {
    fullName,
    email,
    role,
  }
})

module.exports = mongoose.model('User', UserSchema)
