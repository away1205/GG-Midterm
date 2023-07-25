const Comment = require('../models/Comment');
const Video = require('../models/Video');

const getListCommentService = async (videoID) => {
  try {
    const comments = await Comment.find(videoID);
    return comments;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to get user comment: ' + err.message);
  }
};

const postCommentService = async (videoID, username, comment) => {
  try {
    const isValidVideoID = videoID.match(/^[0-9a-fA-F]{24}$/); // Validation of MongoID _id Value
    if (!isValidVideoID) throw new Error('VideoID is invalid');
    if (!username) throw new Error('Username is required!');
    if (!comment) throw new Error('comment is required!');

    const queriedVideo = await Video.findById(videoID);
    if (!queriedVideo) throw new Error('videoID is not found');

    const newComment = new Comment({
      username: username,
      comment: comment,
    });
    newComment.video = videoID;

    return newComment.save();
  } catch (err) {
    console.log(err);
    throw new Error('Failed to post user comment: ' + err.message);
  }
};

module.exports = { getListCommentService, postCommentService };
