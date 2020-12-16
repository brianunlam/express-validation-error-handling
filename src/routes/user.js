const { Router } = require('express');
const asyncMiddleware = require('../middlewares/asyncMiddleware');
const signInValidator = require('../validators/signIn.validator');
const { signIn } = require('../controllers/user.controller');

const router = Router();

router.post('/signin', signInValidator, asyncMiddleware(signIn));

module.exports = router;
