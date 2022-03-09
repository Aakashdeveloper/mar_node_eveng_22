const express = require('express');
let categoryRouter = express.Router();
let mongodb = require('mongodb').MongoClient;
let url = process.env.mongoUrl

function router(menu){
    categoryRouter.route('/')
        .get(function(req,res){
            mongodb.connect(url, function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                    let dbObj = dc.db('marchnode')
                    dbObj.collection('category').find().toArray(function(err,response) {
                        if(err){
                            res.status(500).send('Error While Fetching')
                        }else{
                            res.render('category',{title:'Category Page',data:response,menu})
                        }
                    })
                }
            })
    })

    categoryRouter.route('/details')
        .get(function(req,res){
        res.send('Category Details');
    })

    return categoryRouter

}


module.exports = router;