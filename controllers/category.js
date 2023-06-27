import Category from "../models/Category.js";
const getAllCategories = async (req, res) => {
  const categories = await Category.find({});
  res.status(200).json({ categories });
};

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({ category });
  } catch {
    res.status(500).json({ Error: "Enter valid Data" });
  }
};

const getCategory = async (req, res) => {
  const { id: categoryID } = req.params;
  const category = await Category.findOne({ _id: categoryID });
  if (!category) {
    res.status(404).json({ Error: "Category Not Found!" });
  }

  res.status(200).json({ category });
};
const deleteCategory = async (req, res) => {
  const { id: categoryID } = req.params;
  const category = await Category.findOneAndDelete({ _id: categoryID });
  if (!category) {
    res.status(404).json({ Error: "Category Not Found!" });
  }
  res.status(200).json({ category });
};
const updateCategory = async (req, res) => {
  const { id: categoryID } = req.params;

  const category = await Category.findOneAndUpdate(
    { _id: categoryID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!category) {
    res.status(404).json({ Error: "Category Not Found!" });
  }

  res.status(200).json({ category });
};

export default {
  getAllCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
