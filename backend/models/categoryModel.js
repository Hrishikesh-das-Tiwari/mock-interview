const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'Please tell us your name!'],
    set: (catName) => catName.replace(/\s+/g, ' '),
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
