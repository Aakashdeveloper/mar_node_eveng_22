let os = require('os');
console.log(os.platform())
console.log(os.cpus().length+ " core")
console.log(os.type())
console.log(os.arch())
console.log(os.freemem())

/*
darwin
4 core
Darwin
x64
84811776
*/