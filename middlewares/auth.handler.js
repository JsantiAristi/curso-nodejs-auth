const boom = require('@hapi/boom');
const { config } = require('../config/config.js')

function checkApiKey(req, res, next){
  const apiKey = req.headers[['api']];
  if (apiKey === config.ApiKey) {
    next();
  } else {
    next(boom.unautharozed());
  }
}

function checkAdminRole(req, res, next){
  const user = req.user;
  if (user.role === 'admin') {
    next();
  } else {
    boom.forbidden('se requieren permisos de administrador')
  }
}

function checkRoles(...roles){
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      boom.forbidden('se requieren permisos de administrador')
    }
  }
}

module.exports = {checkApiKey, checkAdminRole, checkRoles};
