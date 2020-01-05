const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ message: "No token authorisation denied" });
  }

  try {
    const decoded = jwt.verify(token, config("jwtSecret"));
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Token is not valid" });
  }
}
module.exports = auth;
