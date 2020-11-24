import {
  ApolloClient,
  InMemoryCache,
  from,
} from '@apollo/client';
import authMiddleware from './middleware/auth';
import uploadLink from './middleware/uploadLink';
import errorHandler from './middleware/errorHandler';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, errorHandler, uploadLink]),
});

export default client;
