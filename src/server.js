import http from 'http';
import { config } from 'dotenv';
import { getRandomHighlight } from '#controllers/highlights';
config();

const server = http.createServer((req, res) => {
  if (req.method != 'GET') {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Bad Request' }));
    return;
  }

  if (req.url != '/random') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
    return;
  }

  getRandomHighlight(res);
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
