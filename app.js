import express from "express";
const app = express();
import products from "./routes/product.js";
import connectDB from "./db/connect.js";
app.use(express.json());

app.use("/products", products);

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
