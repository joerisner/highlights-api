import http from 'http';
import dotenv from 'dotenv';
import { getRandomHighlight } from './controllers/highlights.js';

dotenv.config();

const server = http.createServer((req, res) => {
  if (req.url === '/random' && req.method === 'GET') {
    getRandomHighlight(res);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: res.statusMessage }));
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
