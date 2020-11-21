// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');

const app = require('../app');

const graphQLRequest = ({ query, variables = null }) => (request(app)
  .post('/api')
  .send({
    variables,
    query,
  })
);

module.exports = {
  request: graphQLRequest,
};
