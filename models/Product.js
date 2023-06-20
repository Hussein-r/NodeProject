import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  _id: {
    type: Number,
  },
  title: {
    type: String,
    required: [true, "must provide title"],
    trim: true,
    maxlength: [20, "title can not be more than 20 characters"],
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
    trim: true,
    required: [true, "must provide description"],
    maxlength: [50, "name can not be more than 50 characters"],
  },

  categoryId: {
    type: Number,
    required: [true, "must provide category id"],
  },
  images: {
    type: Array,
    required: true,
  },
});
export default model("Product", ProductSchema);
