import { verify } from "jsonwebtoken";
import User from "../models/User.js";

const verifyToken = (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    verify(
      req.headers.authorization.split(" ")[1],
      "This_is_very_secret_string",
      function (err, decode) {
        if (err) req.user = undefined;
        User.findOne({
          _id: decode.id,
        })
          .exec()
          .then((user) => {
            req.user = user;
            next();
          })
          .catch((err) => {
            return res.status(500).send({
              message: err,
            });
          });
      }
    );
  } else {
    req.user = undefined;
    next();
  }
};
export default verifyToken;
