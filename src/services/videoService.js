const Video = require('../models/Video');
const User = require('../models/User');

const getVideosService = async () => {
  try {
    const video = await Video.find()
      .populate('user', 'username')
      .select('-product');

    return video;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to get videos in getVideosService: ' + err.message);
  }
};

const postVideoService = async (userID, title, url) => {
  try {
    if (!userID) throw new Error('userID is Required');
    if (!title) throw new Error('Video title is Required');
    if (!url) throw new Error('URL thumbnail is Required');

    const newVideo = new Video({
      title: title,
      url_thumbnail: url,
    });
    const user = await User.findById(userID);

    if (!user) throw new Error('Invalid userID');

    newVideo.user = user;

    const data = await newVideo.save();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(
      'Failed to post videos in postVideosService: ' + err.message
    );
  }
};

module.exports = { getVideosService, postVideoService };
