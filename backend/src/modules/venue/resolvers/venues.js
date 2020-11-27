const { Venue } = require('../../../models/venue');

const venues = async (_, args) => {
  const query = {};
  if (args.id) {
    query._id = args.id;
  }
  if (args.name) {
    const regexName = new RegExp(`${args.name}`);
    query.name = { $regex: regexName, $options: 'i' };
  }
  if (args.street) {
    const regexStreet = new RegExp(`${args.street}`);
    query['address.street'] = { $regex: regexStreet, $options: 'i' };
  }
  if (args.venueType) {
    query.venueType = args.venueType;
  }
  return Venue.find(query);
};

module.exports = venues;
