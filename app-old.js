const http = require('http');

http.createServer((req, res) => {

    console.log(req);
    res.write('Hola mundo');
    res.end();
})
.listen(8080);
console.log('Listening on port; ', 8080);