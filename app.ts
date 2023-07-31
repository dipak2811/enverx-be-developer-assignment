import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postsRouter from './routes/posts';

const app: Application = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const dbURI = 'mongodb://0.0.0.0:27017/blog';
mongoose
  .connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err.message));

app.use(postsRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});
