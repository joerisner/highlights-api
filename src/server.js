import http from 'http';
import { config } from 'dotenv';
import { getRandomHighlight } from '#controllers/random';
config();

const server = http.createServer(async (req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Bad Request' }));
    return;
  }

  if (req.url === '/random') {
    try {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(await getRandomHighlight()));
      return;
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: e.message }));
      console.error(e);
      return;
    }
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Not Found' }));
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
