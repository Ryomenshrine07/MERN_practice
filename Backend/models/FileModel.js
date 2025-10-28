const mongoose = require('mongoose');

const userFileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users', 
    required: true
  },

  originalName: {
    type: String,
    required: true
  },

  filename: {
    type: String,
    required: true,
    unique: true
  },

  path: {
    type: String,
    required: true
  },

  mimetype: {
    type: String,
    required: true
  },

  size: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

// timestamps adds two more feilds =>
// 1. created_at (UTC date & time)
// 2. update_at (UTC date & time)

const UserFiles = mongoose.model('UserFile', userFileSchema);

module.exports = UserFiles;