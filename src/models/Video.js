const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const videoSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    alias: 'videoID',
  },
  url_thumbnail: {
    type: String,
    required: [true, 'URL thumbnail is required'],
  },
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  views: {
    type: Number,
    default: 0,
  },
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
  ],
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comment',
    },
  ],
});

module.exports = mongoose.model('video', videoSchema);
