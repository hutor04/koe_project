const { shield, allow } = require('graphql-shield');
const { isBusiness, isOwner } = require('./rules');

const permissions = shield({
  Query: {
    listOwnVenues: isBusiness,
    venues: allow,
    me: allow,
  },
  Mutation: {
    createVenue: isBusiness,
    deleteVenue: isOwner,
    updateVenue: isOwner,
  },
}, {
  fallbackRule: allow,
});

module.exports = permissions;
