const Device = require('./device.model');

/**
 * Get all devices
 * @returns all devices
 */
async function getAllDevices() {
  const devices = await Device.find();
  return devices;
}

/**
 * Create a new device
 * @param {Object} device to create
 * @returns device created
 */
async function createDevice(scholarship) {
  const newDevice = await Device.create(scholarship);
  return newDevice;
}

module.exports = {
  getAllDevices,
  createDevice
}
