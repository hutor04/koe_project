const { getCounter, updateCounter } = require('../remote_counters/client');

const updateVenueCounter = async (_, { id, delta }) => {
  const counter = await getCounter(id).once('value');
  const currentVal = counter.val();
  let result = -1;
  if (currentVal > 0 && delta.toString() === 'decrement') {
    result = currentVal - 1;
    updateCounter(id, result);
  }
  if (currentVal < 10000 && delta.toString() === 'increment') {
    result = currentVal + 1;
    updateCounter(id, result);
  }
  if (delta.toString() === 'reset') {
    result = 0;
    updateCounter(id, 0);
  }
  return result;
};

module.exports = updateVenueCounter;
