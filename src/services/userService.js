const User = require('../models/User');

const makeUserService = async (username, profilePicture) => {
  try {
    // Create a new User instance with the provided data
    const newUser = await new User({
      username: username,
      profile_picture: profilePicture,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Return the saved user object
    return savedUser;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create user: ' + err.message);
  }
};

module.exports = makeUserService;
