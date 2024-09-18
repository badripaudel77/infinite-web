import express, { Application } from 'express';

import postsRouter from './routes/postRoutes';
import { loggerMiddleware } from './middlewares/logger';

const PORT: number | string = process.env.port || 3000;

const app:Application = express();

app.use(loggerMiddleware);

app.use('/api/v1/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Application is up and running on PORT ${PORT}`);
});