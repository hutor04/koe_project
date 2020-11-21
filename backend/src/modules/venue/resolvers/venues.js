const { AuthenticationError } = require('apollo-server-express');
const { Venue } = require('../../../models/venue');

const venues = async (_, args, context) => {
  const query = {};
  return Venue.find(query);
};

module.exports = venues;
