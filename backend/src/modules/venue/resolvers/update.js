const { AuthenticationError } = require('apollo-server-express');
const { Venue } = require('../../../models/venue');
const addFile = require('../../../utils/manageFiles/addFile');

const updateVenue = async (_, args, { user }) => {
  if (!user) {
    throw new AuthenticationError('You are not authenticated!');
  }
  const query = { _id: args.id };
  const data = { ...args };
  let logoFile;
  if (args.logo) {
    logoFile = await addFile(args.logo[0]);
    data.logo = logoFile;
  }
  await Venue.updateOne(query, data, { runValidators: true });
  return Venue.findOne(query);
};

module.exports = updateVenue;
