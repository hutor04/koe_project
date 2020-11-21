const { Venue } = require('../../../models/venue');

const venues = async () => {
  const query = {};
  return Venue.find(query);
};

module.exports = venues;
