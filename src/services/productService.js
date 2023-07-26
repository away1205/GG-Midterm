const Product = require('../models/Product');
const Video = require('../models/Video');

const getListProductService = async (videoID) => {
  try {
    const isValidVideoID = videoID.match(/^[0-9a-fA-F]{24}$/); // Validation of MongoID _id Value
    if (!isValidVideoID) return null;

    const queriedVideo = await Video.findById(videoID);
    if (!queriedVideo) throw new Error('Video not found');

    const products = await Product.find({ video: videoID }).select('-video');

    return products;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to get product: ' + err.message);
  }
};

const postProductService = async (videoID, title, link, price) => {
  try {
    const isValidVideoID = videoID.match(/^[0-9a-fA-F]{24}$/); // Validation of MongoID _id Value
    if (!isValidVideoID) throw new Error('VideoID is invalid');

    const queriedVideo = await Video.findById(videoID);

    if (!queriedVideo) throw new Error('Video not found');

    const newProduct = await new Product({
      title: title,
      link: link,
      price_IDR: price,
    });

    queriedVideo.list_products.push(newProduct);
    await queriedVideo.save();

    newProduct.video = queriedVideo;
    return newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error('Failed to post product: ' + err.message);
  }
};

module.exports = { getListProductService, postProductService };
