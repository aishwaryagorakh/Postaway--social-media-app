const Post = require("./post.model.js");

const createPost = async (req, res) => {
  try {
    const { userId, imageUrl, caption } = req.body;
    console.log(imageUrl);
    console.log(caption);
    const post = new Post({
      userId,
      imageUrl,
      caption,
    });
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postid);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user.id });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postid);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await post.remove();
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { imageUrl, caption } = req.body;
    const post = await Post.findById(req.params.postid);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.imageUrl = imageUrl;
    post.caption = caption;
    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  getUserPosts,
  createPost,
  deletePost,
  updatePost,
};
