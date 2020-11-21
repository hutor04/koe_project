const { rule } = require('graphql-shield');

const isBusiness = rule()(async (parent, args, { user }) => {
  if (user && user.userType === 'business') {
    return true;
  }
  return false;
});

module.exports = {
  isBusiness,
};
