import express from "express";
const app = express();
import categories from "./routes/category.js";
import products from "./routes/product.js";
import connectDB from "./db/connect.js";
import checkCategory from "./middlewares/category.js";
import users from "./routes/user.js";
app.use(express.json());
app.use(users);
app.use("/categories", categories);
app.use("/products", checkCategory);
app.use("/products", products);
app.use("/categories", categories);

const port = 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
