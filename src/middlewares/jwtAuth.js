const jwt = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
  // 1. Read the token.
  const token = req.headers["authorization"];

  // 2. if no token, return the error.
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  // 3. check if token is valid and not invalidated.
  try {
    const payload = jwt.verify(token, "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz");

    // Set the user ID in the request object
    req.userId = payload.userId;

    // 4. call next middleware
    next();
  } catch (err) {
    // 5. return error.
    console.error(err);
    return res.status(401).send("Unauthorized");
  }
};

module.exports = jwtAuth;
//module.exports = invalidateToken;
