const express = require("express");
const connectDB = require("./db.js"); // Import the connectDB function
const postRoutes = require("./src/posts/post.router.js");
const userRoutes = require("./src/users/userRouter.js");
const commentRouter = require("./src/comments/comment.router.js");
const likeRouter = require("./src/likes/like.router.js");
const loggerMiddleware = require("./src/middlewares/logger.middleware.js");
const app = express();

// Connect to MongoDB
connectDB(); // Call the connectDB function to establish the database connection

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);
// Routes
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRouter);
app.use("/api/likes", likeRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
