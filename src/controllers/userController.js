const makeUserService = require('../services/userService');
const AppError = require('./AppError');

const makeUser = async (req, res, next) => {
  const { username, profilePicture } = req.body;

  try {
    // Check if the required input data is provided, else throw a custom AppError with a 400 status
    if (!username) throw new AppError('Please input username!', 400);

    // Create a new user using the userService
    const newUser = await makeUserService(username, profilePicture);

    // Send the inserted user as a JSON response with a 201 status (created)
    res.status(201).json({
      status: 'success',
      created_user: newUser,
    });
  } catch (err) {
    // Pass the error to the error-handling middleware
    next(err);
  }
};

module.exports = makeUser;
