import http from 'http';
import { config } from 'dotenv';
import { getRandomHighlight } from '#controllers/random';
config();

const server = http.createServer(async (req, res) => {
  const baseHeaders = { 'Content-Type': 'application/json; charset=utf-8' };

  if (req.method !== 'GET') {
    res.writeHead(400, baseHeaders);
    res.end(JSON.stringify({ message: 'Bad Request' }));
    return;
  }

  if (req.url === '/random') {
    try {
      res.writeHead(200, { ...baseHeaders, 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify(await getRandomHighlight()));
      return;
    } catch (e) {
      res.writeHead(500, baseHeaders);
      res.end(JSON.stringify({ message: e.message }));
      console.error(e);
      return;
    }
  }

  res.writeHead(404, baseHeaders);
  res.end(JSON.stringify({ message: 'Not Found' }));
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
