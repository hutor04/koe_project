const mongoose = require('mongoose');
const { validateEmail, validateStringLength } = require('./validators');

const validateNameLength = validateStringLength(250);

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: validateNameLength,
      message: (props) => `${props.value} first name is too long!`,
    },
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: validateNameLength,
      message: (props) => `${props.value} last name is too long!`,
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validateEmail,
      message: (props) => `${props.value} is not a valid email format!`,
    },
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  changed: {
    type: Date,
    default: Date.now,
  },
  lastActive: {
    type: Date,
  },
  userType: {
    type: String,
    enum: ['business', 'user', 'admin'],
  },
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = {
  User,
};
