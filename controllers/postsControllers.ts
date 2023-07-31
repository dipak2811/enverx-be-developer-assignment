import { Request, Response } from 'express';
import BlogPostModel from '../models/Post';

export const getPosts = async (req: Request, res: Response) => {
  try {
    let query = BlogPostModel.find();
    const { sortBy, sortOrder, category } = req.query;

    if (sortBy === 'created' || sortBy === 'title') {
      const sortDirection = sortOrder === 'desc' ? -1 : 1;
      query = query.sort({ [sortBy]: sortDirection });
    }

    if (category) {
      query = query.where('category').equals(category);
    }

    const posts = await query.exec();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

  

export const getPostById = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const post = await BlogPostModel.findById(postId);
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, category } = req.body;
    const newPost = new BlogPostModel({
      title,
      content,
      category,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const { title, content, category } = req.body;
    const updatedPost = await BlogPostModel.findByIdAndUpdate(
      postId,
      { title, content, category, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedPost) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.status(200).json(updatedPost);
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const deletedPost = await BlogPostModel.findByIdAndDelete(postId);
    if (!deletedPost) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
