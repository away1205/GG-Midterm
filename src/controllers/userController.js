const makeUserService = require('../services/userService');
const AppError = require('./AppError');

const makeUser = async (req, res, next) => {
  const { username, profilePicture } = req.body;

  try {
    if (!username) throw new AppError('Please input username!', 400);

    const newUser = await makeUserService(username, profilePicture);

    res.status(201).json({
      status: 'success',
      created_user: newUser,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = makeUser;
