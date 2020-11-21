const validateHour = (data) => {
  const hourRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g;
  return hourRegex.test(data);
};

module.exports = validateHour;
