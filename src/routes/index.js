const userRoute = require('./user.route')
, pilotRoute = require('./pilot.route')
, planeRoute = require('./plane.route')
, manifestRoute = require('./manifest.route');

module.exports = (app) => {
  app.use('/user', userRoute);
  app.use('/pilot', pilotRoute);
  app.use('/plane', planeRoute);
  app.use('/manifest', manifestRoute);
};