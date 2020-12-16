const { validationResult } = require('express-validator');
const boom = require('@hapi/boom');

// this is to simulate a call to sequelize
const User = {
  create: () => Promise.resolve(111)
};

async function signIn(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validationError = boom.badRequest();
    Object.assign(validationError.output.payload, { details: errors.array() });
    throw validationError;
  }
  const { email, password } = req.body;

  const userId = await User.create({
    email,
    password
  });
  res.send({ message: 'User created succesfully', userId });
}

module.exports = { signIn };
