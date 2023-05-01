const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  destination: {
    type: String,
  },
  duration: {
    type: Number,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  images: {
    type: String,
  }
});

const Package = mongoose.model('Package', packageSchema);
module.exports = Package;