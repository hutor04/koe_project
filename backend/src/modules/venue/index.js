const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Mutation {
      createVenue (
          name: String!,
          legalName: String,
          logo: String,
          address: AddressInput!,
          phoneNumber: String,
          maxCapacity: Int!,
          hours: HoursInput,
          geoCode: String,
          venueType: venueTypes!
      ): Venue
  }
  type Venue {
      id: ID!
      name: String!
      legalName: String
      logo: String
      address: Address!
      phoneNumber: String
      maxCapacity: Int!
      hours: Hours
      geoCode: String
      venueType: venueTypes!
  }
  type Address {
      country: String!
      city: String!
      postalCode: String!
      street: String!
      house: String
      apartment: String
  }
  input AddressInput {
      country: String!
      city: String!
      postalCode: String!
      street: String!
      house: String
      apartment: String
  }
  type Hours {
      monday: OpenClose
      tuesday: OpenClose
      wednesday: OpenClose
      thursday: OpenClose
      friday: OpenClose
      satruday: OpenClose
      sunday: OpenClose
  }
  input HoursInput {
      monday: OpenCloseInput
      tuesday: OpenCloseInput
      wednesday: OpenCloseInput
      thursday: OpenCloseInput
      friday: OpenCloseInput
      satruday: OpenCloseInput
      sunday: OpenCloseInput
  }
  type OpenClose {
      open: String
      close: String
  }
  input OpenCloseInput {
      open: String
      close: String
  }
  enum venueTypes {
    shop
    restaurant
    bar
    sport
  }
`;

const resolvers = require('./resolvers');

module.exports = {
  typeDefs: [
    typeDefs,
  ],
  resolvers,
};
