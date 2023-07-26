const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const videoSchema = new Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   default: new mongoose.Types.ObjectId(),
  //   alias: 'videoID',
  // },
  url_thumbnail: {
    type: String,
    required: [true, 'URL thumbnail is required'],
  },
  title: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  list_products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
  ],
  list_comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comment',
    },
  ],
});

module.exports = mongoose.model('video', videoSchema);
