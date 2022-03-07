let express = require('express');
let app = express();
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 8690;
const morgan = require('morgan');
const fs = require('fs');

let menu = [
    {link:'/',name:'Home'},
    {link:'/category',name:'Category'},
    {link:'/products',name:'Products'}
]

let categoryRouter = require('./src/router/categoryRouter')(menu)
let productRouter = require('./src/router/productRouter')(menu);

// for logs
//app.use(morgan('common'))
app.use(morgan('common', {stream: fs.createWriteStream('./app.log')}))

//static files path
app.use(express.static(__dirname+'/public'))
// html file path
app.set('views','./src/views')
// view engine name
app.set('view engine', 'ejs')


let catData = [
    {
        "id":1,
        "name":"Shopping",
        "image":"https://i.ibb.co/56VP0Fn/cloths.jpg",
        "link":"/category"
    },
    {
        "id":2,
        "name":"Restaurants",
        "image":"https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "link":"/restaurants"
    }
]


//default route
app.get('/',function(req,res){
    //res.send("Hiii to Express Server");
    res.render('index',{title:"Home Page", data:catData, menu})
});

app.use('/category',categoryRouter);
app.use('/products',productRouter);

app.listen(port,function(err){
    if(err) throw err;
    console.log("Application is running on port "+port);
});