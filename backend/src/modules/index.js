const { makeExecutableSchemaFromModules } = require('../utils/modules');

const auth = require('./auth');
const venue = require('./venue');

module.exports = makeExecutableSchemaFromModules({
  modules: [
    auth,
    venue,
  ],
});
