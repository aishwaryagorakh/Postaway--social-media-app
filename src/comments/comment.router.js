const express = require("express");
const router = express.Router();
const commentController = require("./comment.controller.js");
const verifyToken = require("../middlewares/jwtAuth.js");

router.post("/:postId", verifyToken, commentController.addComment);
router.get("/:postId", verifyToken, commentController.getAllComments);
router.put("/:commentId", verifyToken, commentController.updateComment);
router.delete("/:commentId", verifyToken, commentController.deleteComment);

module.exports = router;
