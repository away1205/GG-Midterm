const express = require('express');
const router = express.Router();
const { getAllVideo, postVideo } = require('../controllers/videoController');
const makeUser = require('../controllers/userController');
const {
  getListProduct,
  postProduct,
} = require('../controllers/productController');

router.get('/', getAllVideo);
router.post('/', postVideo);
router.get('/:videoID', getListProduct);
router.post('/:videoID', postProduct);
// router.get('/:videoID', getComments);
// router.post('/:videoID', postComments);
router.post('/user', makeUser);

module.exports = router;
