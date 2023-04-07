const User = require('../models/userModel');
const Category = require('../models/categoryModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getPeers = catchAsync(async (req, res, next) => {
  const myCategories = req.user?.category;
  const myId = req.user._id.toString();
  let peers = [];

  if (myCategories.length === 0) {
    peers = await User.find({
      _id: { $ne: myId },
    }).populate(
      'name photo summary reputation skillsRating ratingsQuantity profession email'
    );
  }
  
  else {
    for (let i = 0; i < myCategories?.length; i++) {
      const myCategory = myCategories[i];
      const { users } = await Category.findOne({ name: myCategory }).populate({
        path: 'users',
        select:
          'name photo summary reputation skillsRating ratingsQuantity profession',
      });

      peers = peers.concat(
        users.filter((user) => user._id.toString() !== myId)
      );
    }
  }

  res.status(200).json({
    title: 'My Peers',
    peers,
  });
});

exports.getCustomCategoryPeers = catchAsync(async (req, res, next) => {
  const customCategories = req.body.categories.map((cat) =>
    cat.toLowerCase().replace(/\s+/g, ' ')
  );
  let peers = [];
  for (let i = 0; i < customCategories.length; i++) {
    const category = customCategories[i];
    const { users } = await Category.findOne({ name: category }).populate({
      path: 'users',
      select: 'name email photo',
    });

    peers = peers.concat(users.filter((user) => user._id.toString() !== myId));
  }
  res.status(200).json({
    title: 'Custom Peers',
    customCategories,
    peers,
  });
});

exports.getPeer = catchAsync(async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

exports.ratePeer = catchAsync(async (req, res, next) => {
  const myId = req.user.id;
  const myRating = req.body.rating;
  const peerUserName = req.params.username;
  if (myRating < 1 || myRating > 10) {
    return next(new AppError('ratings should be between 1 and 10', 400));
  }
  const peer = await User.findOne({ username: peerUserName }).populate(
    'skillsRating ratingsQuantity'
  );
  if (!peer) return next(new AppError('No user found with that username', 404));
  if (peer._id === myId) {
    return next(new AppError('You cannot rate yourself', 400));
  }
  const newQuantity = peer.ratingsQuantity + 1;

  const newRating =
    (peer.skillsRating * peer.ratingsQuantity + myRating) / newQuantity;

  const newPeer = await User.findOneAndUpdate(
    { username: peerUserName },
    { skillsRating: newRating, ratingsQuantity: newQuantity }
  );
  res.status(201).json({
    status: 'success',
    newPeer,
  });
});
