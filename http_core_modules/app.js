const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.write('Home page');
		res.end();
	}

	if (req.url === '/users') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify([{ name: 'Yemi', age: 20 }]));
		res.end();
	}
});

server.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
