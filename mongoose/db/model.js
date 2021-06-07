const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('student', studentSchema);