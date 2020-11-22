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

const getCounterUpdateTime = (storeID) => db.ref(`stores/${storeID}/updated`);

const updateCounter = (storeID, val) => {
  const updates = {};
  updates[`stores/${storeID}/visitors`] = val;
  updates[`stores/${storeID}/updated`] = Date.now();
  return db.ref().update(updates);
};

module.exports = {
  createCounter,
  deleteCounter,
  getCounter,
  getCounterUpdateTime,
  updateCounter,
};
