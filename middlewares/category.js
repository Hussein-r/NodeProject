import Category from "../models/Category.js";
const checkCategory = async (req, res, next) => {
  const result = await Category.find({});
  const IDs = result.map((item) => item._id);
  if (req.method === "POST" || req.method === "PUT") {
    if (IDs.includes(Number(req.body.category))) {
      next();
    } else {
      res.status(400).json({ Error: "Category Does Not Exist" });
    }
  } else {
    next();
  }
};
export default checkCategory;
