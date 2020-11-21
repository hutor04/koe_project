const { AuthenticationError } = require('apollo-server-express');
const { Venue } = require('../../../models/venue');

const updateVenue = async (_, args, { user }) => {
  if (!user) {
    throw new AuthenticationError('You are not authenticated!');
  }
  const query = { _id: args.id };
  await Venue.updateOne(query, args, { runValidators: true });
  return Venue.findOne(query);
};

module.exports = updateVenue;
