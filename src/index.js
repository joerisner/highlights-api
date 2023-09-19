import app from './app.js';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Highlights API server started on port ${PORT}`);
});
