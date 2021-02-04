const express = require('express');
const CountryController = require('../controllers/Country');
const GameController = require('../controllers/Game');
const UserController = require('../controllers/User');
const UserMiddleware = require('../middlewares/User');

const router = express.Router();

router.get('/countries', CountryController.getCountries);
router.get('/country/:name', CountryController.getCountry);
router.get('/all-countries', CountryController.getAllCountries);

router.put(
  '/registration',
  UserMiddleware.Registration,
  UserController.Registration
);
router.post('/login', UserMiddleware.Login, UserController.Login);

router.get('/slot-machine', UserMiddleware.Auth, GameController.SlotMachine);

module.exports = router;
