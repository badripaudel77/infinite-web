import { Router } from 'express';

import { getPosts } from '../controllers/postsController';

const postsRouter:Router = Router();

postsRouter.get('/', getPosts);

export default postsRouter;