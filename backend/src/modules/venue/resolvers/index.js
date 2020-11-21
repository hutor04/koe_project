const createVenue = require('./create');

const resolvers = {
  Query: {
  },
  Mutation: {
    createVenue,
  },
};

module.exports = resolvers;
