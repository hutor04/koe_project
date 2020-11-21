const db = require('./db');

const createCounter = (storeID) => {
  db.ref(`stores/${storeID}`).set({
    updated: Date.now(),
    visitors: 0,
  });
};

const deleteCounter = (storeID) => {
  db.ref(`stores/${storeID}`).remove();
};

const getCounter = (storeID) => db.ref(`stores/${storeID}/visitors`);

module.exports = {
  createCounter,
  deleteCounter,
  getCounter,
};
