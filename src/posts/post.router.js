// post.router.js

const express = require("express");
const router = express.Router();
const postController = require("./post.controller.js");

router.get("/all", postController.getAllPosts);

// Route to retrieve a specific post by ID
router.get("/:postid", postController.getPostById);

// Route to retrieve all posts for a specific user to display on their profile page
router.get("/", postController.getUserPosts);

// Route to create a new post
router.post("/", postController.createPost);

// Route to delete a specific post by ID
router.delete("/:postid", postController.deletePost);

// Route to update a specific post by ID
router.put("/:postid", postController.updatePost);

module.exports = router;
