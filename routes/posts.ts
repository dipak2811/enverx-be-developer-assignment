import express from 'express';
import { body } from 'express-validator';
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postsControllers';

const router = express.Router();

router.get('/posts', getPosts);

router.get('/posts/:id', getPostById);

router.post(
  '/posts',
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('content').trim().notEmpty().withMessage('Content is required'),
    body('category').trim().notEmpty().withMessage('Category is required'),
  ],
  createPost
);

router.put(
  '/posts/:id',
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('content').trim().notEmpty().withMessage('Content is required'),
    body('category').trim().notEmpty().withMessage('Category is required'),
  ],
  updatePost
);

router.delete('/posts/:id', deletePost);

export default router;
