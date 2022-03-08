const express = require('express');
let categoryRouter = express.Router();


function router(menu){
    categoryRouter.route('/')
        .get(function(req,res){
        //res.send(category);
        res.render('category',{title:'Category Page',data:category,menu})
    })

    categoryRouter.route('/details')
        .get(function(req,res){
        res.send('Category Details');
    })

    return categoryRouter

}


module.exports = router;