const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const productSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    alias: 'productID',
  },
  video: {
    type: Schema.Types.ObjectId,
    ref: 'video',
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  price_IDR: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model('product', productSchema);
