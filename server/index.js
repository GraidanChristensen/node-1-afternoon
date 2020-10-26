const express = require("express");
const products = require("../products.json");
const app = express();
const port = 4040;
const getProducts = require("../server/getProducts");
const getProduct = require("../server/getProduct");

app.get("/api/products", getProducts);

app.get("/api/products/:id", getProduct);

app.listen(4040,() => {
    console.log("Server is listening on port: " + port )
})
