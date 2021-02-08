import express from 'express';
import * as CountryController from '../controllers/Country';
import * as GameController from '../controllers/Game';
import * as UserController from '../controllers/User';
import * as UserMiddleware from '../middlewares/User';

const router = express.Router();

router.post('/countries', CountryController.getCountries);
router.get('/country/:name', CountryController.getCountry);
router.get('/all-countries', CountryController.getAllCountries);

router.put(
  '/registration',
  UserMiddleware.Registration,
  UserController.Registration
);
router.post('/login', UserMiddleware.Login, UserController.Login);

router.get(
  '/slot-machine',
  UserMiddleware.Auth,
  GameController.SlotMachineController
);

export default router;
