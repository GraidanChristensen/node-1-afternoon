const products = require("../products.json");

const getProducts = (req, res) => {
    if(req.query.price){
        const filteredList = products.filter(product => product.price >= parseInt(req.query.price));
        res.status(200).send(filteredList);
    }

    res.status(200).send(products);
};

module.exports = getProducts;