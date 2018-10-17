module.exports = (req, res, next) => {
  // if user not logged in return a status of 401 which is unauthorised
  if (!req.user) {
    return res.status(401).send({ error: "You must login" });
  }
  next();
};
