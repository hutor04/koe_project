const { AuthenticationError } = require('apollo-server-express');
const { Venue } = require('../../../models/venue');
const { deleteCounter } = require('../remote_counters/client');

const deleteVenue = async (_, args, { user }) => {
  if (!user) {
    throw new AuthenticationError('You are not authenticated!');
  }
  // eslint-disable-next-line no-useless-catch
  try {
    await Venue.deleteOne({ _id: args.id });
    deleteCounter(args.id);
    return args.id;
  } catch (error) {
    throw error;
  }
};

module.exports = deleteVenue;
