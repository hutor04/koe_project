const db = require('./db');

const createCounter = (storeID) => {
  db.ref(`stores/${storeID}`).set({
    updated: Date.now(),
    visitors: 0,
  });
};

const deleteCounter = (storeID) => {
  console.log(storeID);
  db.ref(`stores/${storeID}`).remove().catch((err) => console.log(err));
};

const getCounter = (storeID) => db.ref(`stores/${storeID}/visitors`);

module.exports = {
  createCounter,
  deleteCounter,
  getCounter,
};
