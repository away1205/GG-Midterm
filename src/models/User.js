const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  profile_picture: {
    type: String,
    default: 'dummy',
  },
});

module.exports = new mongoose.model('user', userSchema);
