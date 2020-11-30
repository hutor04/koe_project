const { AuthenticationError } = require('apollo-server-express');
const { Venue } = require('../../../models/venue');
const { createCounter } = require('../remote_counters/client');
const addFile = require('../../../utils/manageFiles/addFile');

const createVenue = async (_, {
  name,
  legalName,
  logo,
  address,
  phoneNumber,
  maxCapacity,
  hours,
  geoCode,
  venueType,
}, { user }) => {
  if (!user) {
    throw new AuthenticationError('You are not authenticated!');
  }
  let logoFile;
  if (logo) {
    logoFile = await addFile(logo[0]);
  }
  // eslint-disable-next-line no-useless-catch
  try {
    const venue = await Venue.create({
      // eslint-disable-next-line no-underscore-dangle
      owner: user._id,
      name,
      legalName,
      logo: logoFile,
      address,
      phoneNumber,
      maxCapacity,
      hours,
      geoCode,
      venueType,
    });

    createCounter(venue._id);

    return {
      // eslint-disable-next-line no-underscore-dangle
      id: venue._id,
      name: venue.name,
      legalName: venue.legalName,
      logo: venue.logo,
      address: venue.address,
      phoneNumber: venue.phoneNumber,
      maxCapacity: venue.maxCapacity,
      hours: venue.hours,
      geoCode: venue.geoCode,
      venueType: venue.venueType,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = createVenue;
