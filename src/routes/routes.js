const express = require('express');
const router = express.Router();
const { getAllVideo, postVideo } = require('../controllers/videoController');
const makeUser = require('../controllers/userController');
const {
  getListProduct,
  postProduct,
} = require('../controllers/productController');
const {
  getListComment,
  postComment,
} = require('../controllers/commentController');

router.get('/', getAllVideo);
router.post('/', postVideo);
router.get('/:videoID', getListProduct);
router.post('/:videoID', postProduct);
router.get('/:videoID/comment', getListComment);
router.post('/:videoID/comment', postComment);
router.post('/user', makeUser);

module.exports = router;
