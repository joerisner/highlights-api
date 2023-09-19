import { Router } from 'express';
import { getRandomHighlight } from '#controllers/random';

const router = Router();

router.get('/random', getRandomHighlight);

export default router;
