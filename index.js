import express from "express";
import cors from "cors"
import products from "./productData.js";

const PORT = 3000;
const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://5173-webdevava-productsapi-n3heq6t1x7b.ws-us100.gitpod.io/"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  res.json(filteredProducts);
});

app.listen(PORT, () => {
  console.log(`Server hosted on http://localhost:${PORT}`);
});
