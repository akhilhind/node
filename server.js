const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    // res.end("Thanks for visiting");
    if(req.url == '/favicon.ico') return res.end();
    const currentURL = url.parse(req.url, true);
    console.log(currentURL);
    switch(currentURL.pathname) {
        case '/': 
            res.end('Homepage');
            break;
        case '/about':
            const name = currentURL.query.name;
            if(name == 'rina') res.end("That's my mom.");
            else if(name == "akhil") res.end("That's me bro!");
            else res.end(`Hi ${name}!!!`);
            break;
        default:
            res.end("404 Not Found!!!");
            break;
    }
});


server.listen(4499, '127.0.0.1', () => {
    console.log("Server running at http://127.0.0.1:4499/");
})