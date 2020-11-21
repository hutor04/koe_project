const validateStringLength = (maxLength) => (data) => data.length <= maxLength;

module.exports = validateStringLength;
