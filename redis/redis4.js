let express = require('express');
var createClient = require('redis').createClient;
let port = process.env.PORT || 4200;
const app = express();


app.get('/data',(req,res) => {
    // check in redis first
   //console.log(">>>>url",url)
   (async () => {
       const userInput = (req.query.country).trim()
        const client = createClient({
           host:'localhost',
       port:6379});
     
       client.on('error', (err) => console.log('Redis Client Error', err));
     
       await client.connect();

       const response = await client.get(`${userInput}`)
       if(response){
           const output = JSON.parse(response);
           res.send(output)
       }
     })();

})



app.listen(port,function(){
    console.log(`Server is running on port ${port}`)
})