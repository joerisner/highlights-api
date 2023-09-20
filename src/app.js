import express from 'express';
import router from './router.js';
import { handle404, handleErrors } from './errorHandler.js';

const app = express();

app.use(router);
app.use(handleErrors);
app.use(handle404); // This should always remain at the bottom of the middleware stack

export default app;
