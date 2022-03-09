const express = require('express');
let productRouter = express.Router();
let mongodb = require('mongodb').MongoClient;
let url = process.env.mongoUrl

///
function router(menu){
    productRouter.route('/')
        .get(function(req,res){
            mongodb.connect(url,function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                    let dbObj = dc.db('marchnode');
                    dbObj.collection('products').find().toArray(function(err,result){
                        res.render('product',{title:'Product Page',data:result,menu});
                    })
                }
            })
       
    })

    productRouter.route('/category/:id')
        .get(function(req,res){
            // let id = req.params.id
            let {id} = req.params
            console.log("id>>>",id)
            mongodb.connect(url,function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                    let dbObj = dc.db('marchnode');
                    dbObj.collection('products').find({category_id:Number(id)}).toArray(function(err,result){
                        res.render('product',{title:'Product Page',data:result,menu});
                    })
                }
            })
    })

    return productRouter
}

module.exports = router;