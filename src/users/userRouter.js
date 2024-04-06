const express = require("express");
const router = express.Router();
const userController = require("./userController.js");
const jwtAuth = require("../middlewares/jwtAuth.js");
//const invalidateToken = require("../middlewares/jwtAuth.js");
// Sign up a new user
router.post("/signup", userController.signUp);

// Log in a user
router.post("/signIn", userController.login);

// get all users
router.get("/get-all-details", jwtAuth, userController.getAllUser);

// get one user
router.get("/get-details/:userId", jwtAuth, userController.getOneUser);

// Update a user
router.put("/update-details/:userId", jwtAuth, userController.updateUser);

// Delete a user
router.delete("/users/:userId", jwtAuth, userController.deleteUser);

module.exports = router;
