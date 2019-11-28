const { Station } = require("../../model/Station");

const createStations = async (req, res, next) => {
  const { name, address, province, phone } = req.body;
  try {
    const newStation = new Station({
      name, address, province, phone
    });
    const station = await newStation.save();
    return res.status(200).json(station);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findStations = async (req, res, next) => {
  try {
    const stations = await Station.find();
    return res.status(200).json(stations);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findByIdStation = async (req, res, next) => {
  const errorExceptions = [];
  const { id } = req.params;
  try {
    const station = await Station.findById(id);
    if (!station) {
      errorExceptions.push({ status: 404, station: "Station not found" })
      throw new Error(errorExceptions)
    }
    return res.status(200).json(station);
  } catch (error) {
    return res.status(500).json({ error: errorExceptions })
  }
};

const updateStation = async (req, res, next) => {
  const errorExceptions = [];
  const { id } = req.params;
  const { name, address, phone, province } = req.body;
  try {
    const station = await Station.findById(id);
    if (!station) {
      errorExceptions.push({ status: 404, station: "Station not found" })
      throw new Error(errorExceptions)
    }
    station.name = name;
    station.address = address;
    station.phone = phone;
    station.province = province;
    const newStationUpdate = await station.save();
    return res.status(200).json(newStationUpdate);
  } catch (error) {
    return res.status(500).json({ error: errorExceptions });
  }
};

const deleteStation = async (req, res, next) => {
  const errorExceptions = [];
  const successExceptions = [];
  const { id } = req.params;
  try {
    const station = await Station.findById(id);
    if (!station) {
      errorExceptions.push({ status: 404, station: "Station not found" })
      throw new Error(errorExceptions)
    }
    await station.deleteOne();
    successExceptions.push({ status: 200, success: "Delete station successfuly" })
    return res.status(200).json(successExceptions);
  } catch (error) {
    return res.status(500).json({ error: errorExceptions });
  }
};

module.exports = {
  createStations, findStations, findByIdStation, updateStation, deleteStation
}