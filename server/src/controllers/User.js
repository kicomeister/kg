const db = require('../services/db');
const jsonwebtoken = require('jsonwebtoken');

const getUser = (email) => db.getItemByKey(email);

const setUser = (user) => db.setItem(user.email, user);

exports.Registration = (req, res) => {
  const { name, email, password } = req.body;

  const user = getUser(email);

  if (user) {
    res.status(400);
    return res.send('Bad request!');
  }

  // TODO: encrypt password
  setUser({ email, name, password, points: 20 });

  res.status(201);
  res.send('Registration completed!');
};

exports.Login = (req, res) => {
  const { email, password } = req.body;

  const user = getUser(email);

  if (!user || user.password !== password) {
    res.status(401);
    return res.send('Auth failed!');
  }

  const token = jsonwebtoken.sign({ email }, process.env.TOKEN_SECRET);

  setUser({ ...user, token });

  const { name, points } = user;

  res.json({
    token,
    user: {
      email,
      name,
      points,
    },
  });
};
