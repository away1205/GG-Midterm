const express = require('express');
const router = express.Router();
const { getListVideos, postVideo } = require('../controllers/videoController');
const makeUser = require('../controllers/userController');
const {
  getListProduct,
  postProduct,
} = require('../controllers/productController');
const {
  getListComment,
  postComment,
} = require('../controllers/commentController');

router.get('/', getListVideos);
router.post('/', postVideo);
router.get('/:videoID/product', getListProduct);
router.post('/:videoID/product', postProduct);
router.get('/:videoID/comment', getListComment);
router.post('/:videoID/comment', postComment);
router.post('/user', makeUser);

module.exports = router;
