const express = require("express");
const router = express.Router();
const likeController = require("./like.controller.js");
const verifyToken = require("../middlewares/jwtAuth.js");
router.post("/:postId", verifyToken, likeController.likePost);
router.post("/:commentId", verifyToken, likeController.likeComment);
router.post("/toggle/:postId", verifyToken, likeController.dislikePost);
router.post("/toggle/:commentId", verifyToken, likeController.dislikeComment);

module.exports = router;
