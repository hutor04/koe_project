import { ApolloClient, InMemoryCache } from '@apollo/client';
import firebase from 'firebase';
import config from '../config';

export const client = new ApolloClient({
  uri: config.api,
  cache: new InMemoryCache(),
});

const initfireBase = () => {
  firebase.initializeApp(config.firebaseConf);
  return firebase.database();
};

export const fireBase = initfireBase();
