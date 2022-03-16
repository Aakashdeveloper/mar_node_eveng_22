const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 8920;

app.use(express.static(__dirname+ '/public'));
app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/weather', function(req, res){
    let city = req.query.city ? req.query.city:'Delhi'
    let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=10&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    // calling api
    request(url, function(err, apiResponse) {
        if(err) throw err;
        const output = JSON.parse(apiResponse.body);
        //res.send(output)
        res.render('index',{title:'Weather App', result:output})
    })
})


app.listen(port,function(err){
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})