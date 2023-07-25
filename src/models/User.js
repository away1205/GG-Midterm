const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    alias: 'userID',
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  profile_picture: {
    type: String,
    default: 'dummy',
  },
  video: [
    {
      type: Schema.Types.ObjectId,
      ref: 'video',
    },
  ],
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comment',
    },
  ],
});

module.exports = new mongoose.model('user', userSchema);
