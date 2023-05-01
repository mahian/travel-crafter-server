const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
  author: { type: String },
  date: {
    type: Date,
    default: Date.now,
    get: function (date) {
      return date.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });
    }
  }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;