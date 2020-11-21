const createVenue = require('./create');
const deleteVenue = require('./delete');

const resolvers = {
  Query: {
  },
  Mutation: {
    createVenue,
    deleteVenue,
  },
};

module.exports = resolvers;
