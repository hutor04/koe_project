const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { applyMiddleware } = require('graphql-middleware');

const imagesRouter = require('./modules/images/image-router');
const context = require('./utils/context');
const schema = require('./modules');
const permissions = require('./permissions');

const server = new ApolloServer({
  schema,
  // schema: applyMiddleware(schema, permissions),
  context: async ({ req }) => ({
    user: await context.getUser(req),
  }),
});

const app = express();
app.use('/images/logos', imagesRouter);
server.applyMiddleware({
  path: '/api',
  app,
});

module.exports = app;
