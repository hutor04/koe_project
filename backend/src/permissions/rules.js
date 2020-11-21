const { rule } = require('graphql-shield');
const { Venue } = require('../models/venue');

const isBusiness = rule()(async (parent, args, { user }) => {
  if (user && user.userType === 'business') {
    return true;
  }
  return false;
});

const isOwner = rule()(async (parent, args, { user }) => {
  if (!user) {
    return false;
  }
  const query = { _id: args.id };
  const venue = await Venue.findOne(query);
  const { owner } = venue;
  return owner.toString() === user.id.toString();
});

module.exports = {
  isBusiness,
  isOwner,
};
