const User = require('../models/User');

const makeUserService = async (username, profilePicture) => {
  try {
    const newUser = await new User({
      username: username,
      profile_picture: profilePicture,
    });
    const save = await newUser.save();
    return save;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create user in makeUserService: ' + err.message);
  }
};

module.exports = makeUserService;
