const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  try {
    let { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).send({ error: "Token not found" });
    }
    let token = authorization.split(" ")[1];
    let { _id } = jwt.verify(token, "SECRETKEY");
    req.user =_id;
    next();
  } catch (e) {
    res.status(400).send({ error: "Invalid Token" });
  }
}

module.exports = checkAuth;