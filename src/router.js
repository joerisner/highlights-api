import { Router } from 'express';
import { getAuthors } from '#controllers/authors';
import { getRandomHighlight } from '#controllers/random';
import { getSources } from '#controllers/sources';
import { getTags } from '#controllers/tags';

const router = Router();

router.get('/authors', getAuthors);
router.get('/random', getRandomHighlight);
router.get('/sources', getSources);
router.get('/tags', getTags);

export default router;
