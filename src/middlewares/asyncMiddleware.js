const boom = require('@hapi/boom');

const asyncMiddleware = (fn) => async (req, res, next) => {
  try {
     await fn(req, res, next);
  } catch (err) {
    if (!err.isBoom) {
      return next(boom.badImplementation(err));
    }
    next(err);
  }
};

module.exports = asyncMiddleware;
