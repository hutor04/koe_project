const { rule } = require('graphql-shield');

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
  console.log(args);
  return true;
});
module.exports = {
  isBusiness,
  isOwner,
};
