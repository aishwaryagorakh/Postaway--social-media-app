const mongoose = require("mongoose");
//const Comment = require("../comments/comment.model.js");
const postSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  imageUrl: {
    type: String,
    // required: true,
  },
  caption: {
    type: String,
    //required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment", // Reference to the Comment model
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
