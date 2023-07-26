const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const commentSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    alias: 'commentID',
  },
  video: {
    type: Schema.Types.ObjectId,
    ref: 'video',
  },
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = new mongoose.model('comment', commentSchema);
