var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
const http = require('http');
http.createServer( (req, res)=> {
    res.end('<h1>Hello world</h1>');
}).listen(server_port, server_ip_address,() => console.log('listening ' + server_port + ' port'));