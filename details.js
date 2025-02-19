const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/api/data' && req.method === 'GET') {
        const responseData = {
            name: 'John Doe',
            age: 30,
            city: 'New York'
        };
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(responseData));
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
