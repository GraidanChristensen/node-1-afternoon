const products = require("../products.json");

const getProduct = (req, res) =>{

    for(let i = 0; i < products.length; i++){
        console.log(`req id: ${parseInt(req.params.id)} productId: ${products[i].id}`)
        if(products[i].id === parseInt(req.params.id)){
            res.status(200).send(products[i]);
        }
    
    }
    res.status(500).send("Item not in list");

};

module.exports = getProduct;