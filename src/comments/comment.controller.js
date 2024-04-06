const Comment = require("./comment.model.js");
const Post = require("../posts/post.model.js");
// Create a new comment
const addComment = async (req, res) => {
  try {
    const postId = req.params.postId; // Extract postId from request parameters
    const { comments } = req.body;
    const userId = req.userId;
    // Check if the post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Create a new comment object with postId included
    const newComment = new Comment({
      userId: userId,
      postId: postId,
      comments: comments,
    });

    // Save the new comment to the database
    await newComment.save();

    // Push the ObjectId of the new comment to the post's comments array
    post.comments.push(newComment._id);

    // Save the post with the updated comments array
    await post.save();

    res.status(201).json({ message: "Comment added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all comments for a post
const getAllComments = async (req, res) => {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({ postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a comment
const updateComment = async (req, res) => {
  try {
    const commentId = req.params.commentId; // Assuming comment ID is extracted from URL params
    const { comments } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { comments },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a comment
const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId; // Assuming comment ID is extracted from URL params

    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addComment,
  getAllComments,
  updateComment,
  deleteComment,
};
