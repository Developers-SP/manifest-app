const md5 = require('md5');

module.exports = (req, res, next) => {
    if (req.body && typeof req.body === 'object' && req.body.hasOwnProperty('password')) {
        req.body.password = md5(req.body.password);
        next();
    } else {
      next();
    }
  };
  