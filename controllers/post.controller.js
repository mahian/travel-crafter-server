const Post = require('../models/post');
const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Initialize upload
const upload = multer({ storage: storage });

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.log('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.log('Error fetching post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      imageUrl: req.body.image
    });
    await post.save();
    res.json(post);
  }
  catch (error) {
    console.log('Error creating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.log('Error updating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.log('Error deleting post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};