import { Schema, model } from 'mongoose';

interface BlogPost {
  title: string;
  content: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const blogPostSchema = new Schema<BlogPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const BlogPostModel = model<BlogPost>('BlogPost', blogPostSchema);

export default BlogPostModel;
