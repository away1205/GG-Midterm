const {
  getUserCommentService,
  postUserCommentService,
} = require('../services/userCommentService');
const AppError = require('./AppError');

const getUserComment = async (req, res) => {
  const userComment = await getUserCommentService();

  if (!userComment) throw new AppError('No comment', 404);

  res.status(200).json(userComment);
};

const postUserComment = (req, res) => {
  const { username, comment, videoID } = req.body;

  const newComment = postUserCommentService(username, comment, videoID);

  res.status(201).json(newComment ? 'Success' : 'Fail');
};

module.exports = { getUserComment, postUserComment };
