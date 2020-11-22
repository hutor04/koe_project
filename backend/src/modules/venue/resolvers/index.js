const createVenue = require('./create');
const deleteVenue = require('./delete');
const updateVenue = require('./update');
const listOwnVenues = require('./listOwnVenues');
const venues = require('./venues');
const updateVenueCounter = require('./updateVenueCouonter');

const resolvers = {
  Query: {
    listOwnVenues,
    venues,
  },
  Mutation: {
    createVenue,
    deleteVenue,
    updateVenue,
    updateVenueCounter,
  },
};

module.exports = resolvers;
