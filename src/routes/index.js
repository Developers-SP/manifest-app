const athleteRoute = require('./athlete.route')
, equipmentRoute = require('./equipment.route')
, modalityRoute = require('./modality.route')
, orderRoute = require('./order.route')
, paymentTypeRoute = require('./payment.route')
, pilotRoute = require('./pilot.route')
, planeRoute = require('./plane.route')
, seatRoute = require('./seat.route')
, takeoffRoute = require('./takeoff.route')
, userRoute = require('./user.route');


module.exports = (app) => {
  app.use('/athlete', athleteRoute);
  app.use('/equipment', equipmentRoute);
  app.use('/modality', modalityRoute);
  app.use('/order', orderRoute);
  app.use('/payment', paymentTypeRoute);
  app.use('/pilot', pilotRoute);
  app.use('/plane', planeRoute);
  app.use('/seat', seatRoute);
  app.use('/takeoff', takeoffRoute);
  app.use('/user', userRoute);
};
