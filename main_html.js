const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream('myWebPage.html').pipe(res)
});

server.listen(process.env.PORT || 8000);
console.log("server running at http://127.0.0.1:8000");