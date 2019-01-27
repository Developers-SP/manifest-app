const userRoute = require('./user.route')
, pilotRoute = require('./pilot.route')
, planeRoute = require('./plane.route')
, takeoffRoute = require('./takeoff.route')
, modalityRoute = require('./modality.route')
, athleteRoute = require('./athlete.route')
, spaceRoute = require('./space.route')
, equipmentRoute = require('./equipment.route')
, orderRoute = require('./order.route')
, paymentTypeRoute = require('./payment.type.route');


module.exports = (app) => {
  app.use('/user', userRoute);
  app.use('/pilot', pilotRoute);
  app.use('/plane', planeRoute);
  app.use('/takeoff', takeoffRoute);
  app.use('/modality', modalityRoute);
  app.use('/athlete', athleteRoute);
  app.use('/space', spaceRoute);
  app.use('/equipment', equipmentRoute);
  app.use('/order', orderRoute);
  app.use('/payment-type', paymentTypeRoute);
};