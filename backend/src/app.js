const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { applyMiddleware } = require('graphql-middleware');

const context = require('./utils/context');
const schema = require('./modules');
const permissions = require('./permissions');

const server = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  context: async ({ req }) => ({
    user: await context.getUser(req),
  }),
});

const app = express();

server.applyMiddleware({
  path: '/api',
  app,
});

module.exports = app;
