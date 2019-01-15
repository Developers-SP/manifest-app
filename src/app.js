const express = require('express')
, app = express()
, http = require('http')
, parser = require('./parser')
, routes = require('./routes');
const {
  mode
  , host
  , port
} = require('./environments');

function start(){
  parser(app);
  routes(app);
  const server = http.createServer(app);
  console.log('Subindo a aplicação');
  return server.listen(port);
}


module.exports = start();
