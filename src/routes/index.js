const userRoute = require('./user.route')
, pilotRoute = require('./pilot.route')
, planeRoute = require('./plane.route');

module.exports = (app) => {
  app.use('/user', userRoute);
  app.use('/pilot', pilotRoute);
  app.use('/plane', planeRoute);
};