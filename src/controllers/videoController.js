const {
  getVideosService,
  postVideoService,
} = require('../services/videoService');
const AppError = require('./AppError');

const getAllVideo = async (req, res, next) => {
  try {
    const videos = await getVideosService();

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
  const { user, title, url } = req.body;

  try {
    if (!user) throw new AppError('Please input username!', 404);
    if (!title) throw new AppError('Please input video title!', 404);
    if (!url) throw new AppError('Please input url thumbnail!', 404);

    const video = await postVideoService(user, title, url);
    res.status(201).json(video);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllVideo, postVideo };
