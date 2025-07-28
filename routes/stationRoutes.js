const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createStation,
  getStations,
  updateStation,
  deleteStation
} = require('../controller/StationController');

router.post('/createStation', auth, createStation);
router.get('/', auth, getStations);
router.put('/:id', auth, updateStation);
router.delete('/:id', auth, deleteStation);

module.exports = router;
