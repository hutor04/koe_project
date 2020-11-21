const { AuthenticationError } = require('apollo-server-express');
const { Venue } = require('../../../models/venue');

const listOwnVenues = async (_, args, context) => {
  if (!context.user) {
    throw new AuthenticationError('You are not authenticated!');
  }
  const query = { owner: context.user.id };
  return Venue.find(query);
};

module.exports = listOwnVenues;
