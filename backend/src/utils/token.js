const jwt = require('jsonwebtoken');
const config = require('../config');

const create = (userId) => new Promise((resolve, reject) => {
  jwt.sign({ userId }, config.JWT_SECRET, { expiresIn: config.JWT_LIFE_TIME },
    (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
});

const getDecodedToken = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, config.JWT_SECRET,
    (error, decodedToken) => {
      if (error) {
        reject(error);
      } else if (!decodedToken.exp || !decodedToken.iat) {
        reject(new Error('Token had no "exp" or "iat" payload'));
      } else {
        resolve(decodedToken);
      }
    });
});

module.exports = {
  create,
  getDecodedToken,
};
