const Video = require('../models/Video');
const User = require('../models/User');

const getVideosService = async () => {
  try {
    const video = await Video.find()
      .populate('user', 'username')
      .select('-product -list_comments');

    return video;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to get videos: ' + err.message);
  }
};

const postVideoService = async (userID, title, url) => {
  try {
    if (!userID) throw new Error('userID is Required');
    if (!title) throw new Error('Video title is Required');
    if (!url) throw new Error('URL thumbnail is Required');

    const queriedUser = await User.findById(userID);

    if (!queriedUser) throw new Error('Invalid userID');

    const newVideo = new Video({
      title: title,
      url_thumbnail: url,
    });
    newVideo.user = queriedUser;
    queriedUser.video.push(newVideo);

    const data = await newVideo.save();
    await queriedUser.save();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to post videos: ' + err.message);
  }
};

module.exports = { getVideosService, postVideoService };
