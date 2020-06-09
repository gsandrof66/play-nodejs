const http = require('http');
http.createServer(function (req, res) {
    res.end('<h1>Hello world</h1>');
}).listen(3003, () => console.log('listening 3003 port'));