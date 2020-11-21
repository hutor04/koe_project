const createVenue = require('./create');
const deleteVenue = require('./delete');
const updateVenue = require('./update');
const listOwnVenues = require('./listOwnVenues');
const venues = require('./venues');

const resolvers = {
  Query: {
    listOwnVenues,
    venues,
  },
  Mutation: {
    createVenue,
    deleteVenue,
    updateVenue,
  },
};

module.exports = resolvers;
