const Post = require("../posts/post.model.js");
const Comment = require("../comments/comment.model.js");

const likePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Increment the likes count
    post.likes += 1;
    await post.save();

    res.status(200).json({ message: "Post liked" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const likeComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "comment not found" });
    }

    // Increment the likes count
    comment.likes += 1;
    await comment.save();

    res.status(200).json({ message: "comment liked" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const dislikePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Increment the likes count
    post.likes -= 1;
    await post.save();

    res.status(200).json({ message: "Post disliked :(" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const dislikeComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "comment not found" });
    }

    // Increment the likes count
    comment.likes -= 1;
    await comment.save();

    res.status(200).json({ message: "comment disliked :(" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  likePost,
  likeComment,
  dislikePost,
  dislikeComment,
};
