const {
  getListVideosService,
  postVideoService,
} = require('../services/videoService');
const AppError = require('./AppError');

const getListVideos = async (req, res, next) => {
  try {
    const videos = await getListVideosService();

    if (videos.length < 1) throw new AppError('No Videos', 404);

    res.status(200).json({
      status: 'success',
      list_videos: videos,
    });
  } catch (err) {
    next(err);
  }
};

const postVideo = async (req, res, next) => {
  const { userID, title, url } = req.body;

  try {
    if (!userID) throw new AppError('Please input username!', 404);
    if (!title) throw new AppError('Please input video title!', 404);
    if (!url) throw new AppError('Please input url thumbnail!', 404);

    const video = await postVideoService(userID, title, url);
    res.status(201).json({ status: 'success', inserted_video: video });
  } catch (err) {
    next(err);
  }
};

module.exports = { getListVideos, postVideo };
