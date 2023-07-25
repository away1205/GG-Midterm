const {
  getListProductService,
  postProductService,
} = require('../services/productService');
const AppError = require('./AppError');

const getListProduct = async (req, res, next) => {
  const { videoID } = req.params;

  try {
    const products = await getListProductService(videoID);

    if (products.length === 0) throw new AppError('No Products', 404);

    res.status(200).json({ status: 'success', list_products: products });
  } catch (err) {
    next(err);
  }
};

const postProduct = async (req, res, next) => {
  const { title, link, price } = req.body;
  const { videoID } = req.params;

  try {
    if (!title) throw new AppError('Please input title!', 400);
    if (!link) throw new AppError('Please input link product!', 400);
    if (!price || isNaN(price))
      throw new AppError('Please input the right price!', 400);

    const newProduct = await postProductService(
      videoID,
      title,
      link,
      Number(price)
    );

    res.status(201).json({ status: 'success', inserted_product: newProduct });
  } catch (err) {
    next(err);
  }
};

module.exports = { getListProduct, postProduct };
