const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const currURL = url.parse(req.url, true);
    switch(currURL.pathname) {
        case '/home':
            res.end('Thanks for visiting home page');
            break;
        default:
            res.end('This page is not available');
            break;
    }
});

server.listen(9988, '127.0.0.1', () => {
    console.log("Server running at http://127.0.0.1:9988/")
});