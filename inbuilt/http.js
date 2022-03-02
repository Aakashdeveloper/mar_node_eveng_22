let http = require('http');

// req >> what we send to server (params, queryParams ,body)
// localhost:7800/data/1?name=John
// res >>  what server will respond

let server = http.createServer(function(req, res){
    res.write('<h1>My Node Code Server</h1>')
    res.end()
})

server.listen(9700)