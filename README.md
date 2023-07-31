# Blog Posting App API

This is a RESTful API for a simple blog posting application built with Node, Express, and MongoDB. It allows users to perform CRUD operations on blog posts.

## Setup

1. Clone the repository to your local machine:


2. Install the dependencies:


3. Set up the MongoDB database:

   - Make sure you have MongoDB installed and running on your machine.
   - Create a new database in MongoDB and note down the connection URI.


Replace `dbURI` with the MongoDB connection URI you obtained in step 3.

## Running the API

To start the server, run the following command:
```npx ts-node app.ts```


## API Endpoints

- **GET /posts**
  - Get all blog posts.
  - Query Parameters:
    - `sortBy`: Sort the posts by 'createdAt' or 'title' (optional).
    - `sortOrder`: Sort order ('asc' or 'desc') when sorting by 'createdAt' or 'title' (optional).
    - `category`: Filter posts by category (optional).
  - Response: JSON array of blog posts.

- **GET /posts/:id**
  - Get a specific blog post by ID.
  - URL Parameter: `id` (required).
  - Response: JSON object representing the blog post.

- **POST /posts**
  - Create a new blog post.
  - Request Body: JSON object with `title`, `content`, and `category` fields.
  - Response: JSON object representing the created blog post.

- **PUT /posts/:id**
  - Update an existing blog post.
  - URL Parameter: `id` (required).
  - Request Body: JSON object with updated `title`, `content`, and `category` fields.
  - Response: JSON object representing the updated blog post.

- **DELETE /posts/:id**
  - Delete a blog post.
  - URL Parameter: `id` (required).
  - Response: No content (204 status).

