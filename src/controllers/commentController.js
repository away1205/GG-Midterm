const {
  getListCommentService,
  postCommentService,
} = require('../services/commentService');
const AppError = require('./AppError');

const getListComment = async (req, res, next) => {
  const { videoID } = req.params;
  try {
    const comments = await getListCommentService(videoID);

    if (!comments) throw new AppError('No comments', 404);

    res.status(200).json({ status: 'success', data: comments });
  } catch (err) {
    next(err);
  }
};

const postComment = async (req, res, next) => {
  const { username, comment } = req.body;
  const { videoID } = req.params;

  try {
    if (!username) throw new AppError('Please input username!', 404);
    if (!comment) throw new AppError('Please input comment!', 404);

    const newComment = await postCommentService(videoID, username, comment);

    res.status(201).json({ status: 'success', inserted_comment: newComment });
  } catch (err) {
    next(err);
  }
};

module.exports = { getListComment, postComment };
