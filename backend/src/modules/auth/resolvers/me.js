/* eslint-disable no-underscore-dangle */
const { AuthenticationError } = require('apollo-server-express');

const me = async (_, args, context) => {
  if (!context.user) {
    throw new AuthenticationError('You are not authenticated!');
  }
  return ({
    ...context.user._doc,
    id: context.user.id,
  });
};

module.exports = me;
