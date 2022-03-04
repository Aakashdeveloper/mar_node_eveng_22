let express = require('express');
let app = express();
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 8690;
const morgan = require('morgan');
const fs = require('fs');
let categoryRouter = require('./src/router/categoryRouter');
let productRouter = require('./src/router/productRouter');

// for logs
//app.use(morgan('common'))
app.use(morgan('common', {stream: fs.createWriteStream('./app.log')}))

//static files path
app.use(express.static(__dirname+'/public'))
// html file path
app.set('views','./src/views')
// view engine name
app.set('view engine', 'ejs')

//default route
app.get('/',function(req,res){
    //res.send("Hiii to Express Server");
    res.render('index',{title:"Node With EJS"})
});

app.use('/category',categoryRouter);
app.use('/products',productRouter);

app.listen(port,function(err){
    if(err) throw err;
    console.log("Application is running on port "+port);
});