const express = require('express');
let productRouter = express.Router();

///
function router(menu){
    productRouter.route('/category')
        .get(function(req,res){
        res.send(products);
    })

    productRouter.route('/details')
        .get(function(req,res){
        res.send('Products Details');
    })

    return productRouter
}

module.exports = router;