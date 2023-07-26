const Video = require('../models/Video');
const User = require('../models/User');

const getListVideosService = async () => {
  try {
    const video = await Video.find()
      .populate('creator', 'username')
      .select('-list_products -list_comments');

    return video;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to get videos: ' + err.message);
  }
};

const getDetailVideosService = async (videoID) => {
  try {
    const isValidVideoID = videoID.match(/^[0-9a-fA-F]{24}$/); // Validation of MongoID _id Value
    if (!isValidVideoID) throw new Error('VideoID is invalid');
    const video = await Video.findById(videoID).populate('creator', 'username');

    return video;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to get videos: ' + err.message);
  }
};

const postVideoService = async (username, title, url) => {
  try {
    if (!username) throw new Error('Username is Required');
    if (!title) throw new Error('Video title is Required');
    if (!url) throw new Error('URL thumbnail is Required');

    const newVideo = new Video({
      username: username,
      title: title,
      url_thumbnail: url,
    });

    const data = await newVideo.save();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to post videos: ' + err.message);
  }
};

module.exports = {
  getListVideosService,
  postVideoService,
  getDetailVideosService,
};
