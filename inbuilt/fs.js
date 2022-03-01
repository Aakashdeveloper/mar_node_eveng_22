let fs = require('fs');

//create files
/*
fs.writeFile('mytext.txt','Text Changed',function(err){
    if(err) throw err;
    console.log('File Created')
})


//append files
fs.appendFile('mydata.json','{"name":"John"}',function(err){
    if(err) throw err;
    console.log('File Appended')
})


fs.readFile('mydata.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})


fs.unlink('mytext.txt',function(err){
    if(err) throw err;
    console.log('file deleted')
})
*/

fs.rename('mydata.json','mycode.json',function(err){
    if(err) throw err;
    console.log('file renamed')
})