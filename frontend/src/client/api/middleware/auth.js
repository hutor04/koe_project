import { ApolloLink } from '@apollo/client';

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      "x-token": localStorage.getItem('token') || null,
    }
  });

  return forward(operation);
});

export default authMiddleware;
