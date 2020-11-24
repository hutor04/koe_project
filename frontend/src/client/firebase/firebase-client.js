import firebase from 'firebase';
import config from '../../config';

const initfireBase = () => {
  firebase.initializeApp(config.firebaseConf);
  return firebase.database();
};

const fireBase = initfireBase();

export default fireBase;
