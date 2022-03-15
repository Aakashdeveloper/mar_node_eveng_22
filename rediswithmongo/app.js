const express = require('express');
const redis = require('redis');
const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const app = express();
const port = 3214;

const client = redis.createClient({
    host:'localhost',
    port:6379
})

app.get('/data/:id',(req,res) => {
    const productId = Number(req.params.id)
    // check data in redis
    client.get(`${productId}`,(err,result) => {
        if(result){
            const output = JSON.parse(result);
            res.send(output)
        }else{
            /// get data from mongodb
            mongodb.connect(url,(err,dc) => {
                if(err){
                    res.send(`Error While Connecting Db`)
                }else{
                    // get data from mongodb
                    var dbObj = dc.db('marchnode');
                    dbObj.collection('products').find({id:productId}).toArray((err,data) => {
                        //save data in redis
                        client.setex(`${productId}`,3600,JSON.stringify({Source:'Redis',data}))
                        res.send({source:'MongoDb',data})
                    })
                }
            })
        }
    })
})

app.listen(port,(err) => {
    console.log(`Server running on port ${port}`)
})