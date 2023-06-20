import Product from "../models/Product.js";
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};

const createProduct = async (req, res) => {
  console.log(req.params);
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch {
    res.status(500).json({ Error: "Enter valid Data" });
  }
};

const getProduct = async (req, res) => {
  const { id: productID } = req.params;
  const product = await Product.findOne({ _id: productID });
  if (!product) {
    res.status(404).json({ Error: "Product Not Found!" });
  }

  res.status(200).json({ product });
};
const deleteProduct = async (req, res) => {
  const { id: productID } = req.params;
  const product = await Product.findOneAndDelete({ _id: productID });
  if (!product) {
    res.status(404).json({ Error: "Product Not Found!" });
  }
  res.status(200).json({ product });
};
const updateProduct = async (req, res) => {
  const { id: productID } = req.params;

  const product = await Product.findOneAndUpdate({ _id: productID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    res.status(404).json({ Error: "Product Not Found!" });
  }

  res.status(200).json({ product });
};

export default {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
