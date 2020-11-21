const { shield } = require('graphql-shield');
const { isBusiness } = require('./rules');

const index = shield({
  Mutation: {
    createVenue: isBusiness,
  },
});

module.exports = index;
