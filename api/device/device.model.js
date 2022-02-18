const mongoose = require('mongoose')

const DeviceSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Device', DeviceSchema);
