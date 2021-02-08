import jwt from 'express-jwt';
import { check, validationResult } from 'express-validator';

const getRegistrationValidators = () => [
  check('email').isEmail(),
  check('password').isLength(5),
  check('name').notEmpty(),
];

const getLoginValidators = () => [
  check('email').isEmail(),
  check('password').notEmpty(),
];

const reporter = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  next();
};

export const Auth = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ['HS256'],
});
export const Login = [getLoginValidators(), reporter];
export const Registration = [getRegistrationValidators(), reporter];
