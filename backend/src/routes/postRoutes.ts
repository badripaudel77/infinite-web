import { Router } from 'express';

import { getPosts, getSinglePost, addPost, deletePost } from '../controllers/postsController';
import { authMiddleware } from '../middlewares/auth';
import upload, { uploadImage } from '../utils/imageUtils';

const postsRouter:Router = Router();

postsRouter.get('/', getPosts);
postsRouter.get('/:postId', getSinglePost);
postsRouter.post('/', authMiddleware, addPost);
// postsRouter.put('/:postId', updatePost); // Similar to post (add Post ) request.

postsRouter.delete('/:postId', deletePost);
postsRouter.post('/upload', upload.single('featuredImage'), uploadImage);

export default postsRouter;