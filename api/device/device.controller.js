const { getAllDevices, createDevice } = require('./device.service')

async function getAllDevicesHandler(req, res) {
  try {
    const devices = await getAllDevices();
    return res.status(200).json(devices)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

async function createDeviceHandler(req, res) {
  try {
    const devices = await getAllDevices();
    if (devices.some(device => device.token === req.body.token)) {
      return res.status(200).json({ message: 'the device token is already created' })
    }
    const deviceCreated = await createDevice(req.body)
    return res.status(201).json(deviceCreated)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllDevicesHandler, createDeviceHandler
}
