const passport = require('passport');

//Colocamos las diferentes estrategias
const { LocalStrategy } = require('./strategies/local.strategy');
const { JwtStrategy } = require('./strategies/local.strategy');

passport.use(LocalStrategy, JwtStrategy);
