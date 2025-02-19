const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;
    res.setHeader('Content-Type', 'text/plain');
    if (queryParams.name) {
        res.statusCode = 200;
        res.end(`Hello, ${queryParams.name}!`);
    } else {
        res.statusCode = 400;
        res.end('Please provide a name in the query parameter (e.g., /greet?name=John)');
    }
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
