const { check } = require('express-validator');

const signInValidator = [
  check('email').isEmail().withMessage('Not a valid email'),
  check('password')
    .isLength({ min: 8 }).withMessage('must be at least 8 chars long')
    .isLength({ max: 20 })
    .withMessage('It cannot be longer than 20 chars')
    .matches(/\d/)
    .withMessage('must contain a number')
];

module.exports = signInValidator;
