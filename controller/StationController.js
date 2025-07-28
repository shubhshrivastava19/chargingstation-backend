const ChargingStation = require('../models/ChargingStation');

exports.createStation = async (req, res) => {
  const { name, location, status, powerOutput, connectorType } = req.body;
  try {
    const station = new ChargingStation({
      name,
      location,
      status,
      powerOutput,
      connectorType,
      user: req.user.id
    });
    await station.save();
    res.status(201).json(station);
  } catch (err) {
     console.log(err)
    res.status(500).send('Server Error');
  }
};

exports.getStations = async (req, res) => {
  try {
    const stations = await ChargingStation.find();
    res.json(stations);
  } catch (err) {
    res.status(500).send('Server Error');
    console.log(err)
  }
};

exports.updateStation = async (req, res) => {
  try {
    const station = await ChargingStation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(station);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteStation = async (req, res) => {
  try {
    await ChargingStation.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Charging station deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
