const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('../models/userModel');
const authController = require('./authController');
const catchAsync = require('../utils/catchAsync');

exports.getMe = catchAsync(async (req, res, next) => {
  const myId = req.user.id;
  const myData = await User.findById(myId);
  res.status(200).json({
    status: 'success',
    profile: myData,
  });
});

exports.updateUserPassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const token = req.cookies.jwt;
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const userId = decoded.id;

  const user = await User.findById(userId).select('+password');

  // 2) Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // User.findByIdAndUpdate will NOT work as intended!

  // 4) Log user in, send JWT
  authController.createSendToken(user, 200, res);
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    title: 'Your account',
    user: updatedUser,
  });
});
