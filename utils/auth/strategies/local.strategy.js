const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const userService = require('./../../../services/user.service');
const service = new userService();

const LocalStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
  },
  async(email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      }
      //Todo salió bien
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false)
    }
});

module.exports = LocalStrategy;
