const firebase = require('firebase');
const config = require('../../../config');

const firebaseConfig = {
  apiKey: config.FIREBASE_APIKEY,
  authDomain: config.FIREBASE_AUTHDOMAIN,
  databaseURL: config.FIREBASE_DATABASEURL,
  projectId: config.FIREBASE_PROJECTID,
  storageBucket: config.FIREBASE_STORAGEBUCKET,
  messagingSenderId: config.FIREBASE_MESSAGINGSENDERID,
  appId: config.FIREBASE_APPID,
  measurementId: config.FIREBASE_MEASUREMENTID,
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

module.exports = database;
