const jwt = require('express-jwt');
const { check, validationResult } = require('express-validator');

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

module.exports = {
  Auth: jwt({ secret: process.env.TOKEN_SECRET, algorithms: ['HS256'] }),
  Registration: [getRegistrationValidators(), reporter],
  Login: [getLoginValidators(), reporter],
};
