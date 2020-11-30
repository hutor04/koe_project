const mongoose = require('mongoose');
const { validateHour, validateStringLength } = require('./validators');
const addressSchema = require('./address');

const validateNameLength = validateStringLength(250);

const venueSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
    validate: {
      validator: validateNameLength,
      message: (props) => `${props.value} name is too long!`,
    },
  },
  legalName: {
    type: String,
    validate: {
      validator: validateNameLength,
      message: (props) => `${props.value} name is too long!`,
    },
  },
  logo: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    filename: {
      type: String,
    },
    mimetype: {
      type: String,
    },
    encoding: {
      type: String,
    },
  },
  address: {
    type: addressSchema,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  maxCapacity: {
    type: Number,
    required: true,
    min: [0, 'Capacity can not be less than 0.'],
    max: [10000, 'Capacity can not be more than 10K.'],
  },
  hours: {
    monday: {
      open: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
      close: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
    },
    tuesday: {
      open: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
      close: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
    },
    wednesday: {
      open: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
      close: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
    },
    thursday: {
      open: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
      close: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
    },
    friday: {
      open: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
      close: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
    },
    saturday: {
      open: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
      close: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
    },
    sunday: {
      open: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
      close: {
        type: String,
        validate: {
          validator: validateHour,
          message: (props) => `${props.value} is not a valid hour format!`,
        },
      },
    },
  },
  geoCode: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  changed: {
    type: Date,
    default: Date.now,

  },
  venueType: {
    type: String,
    required: true,
    enum: ['shop', 'restaurant', 'bar', 'sport'],
  },
});

const Venue = mongoose.model('Venue', venueSchema, 'venues');

module.exports = {
  Venue,
};
