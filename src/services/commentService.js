const UserComment = require('../models/UserComment');

const getUserCommentService = async (videoID) => {
  const userComment = await UserComment.findOne(videoID);
  return userComment;
};

const postUserCommentService = async () => {
  const { username, comment, videoID } = req.query;
  const newComment = {
    username: username,
    comment: comment,
    videoID: videoID,
  };

  const userComment = await UserComment.insertOne(newComment);
  return userComment;
};

module.exports = { getUserCommentService, postUserCommentService };
