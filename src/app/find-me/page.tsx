// pages/blog.tsx

import React from "react";

// Define the type for the blog post
type BlogPost = {
  title: string;
  date: string;
  content: string;
};

// Sample blog posts
const blogPosts: BlogPost[] = [
  {
    title: "How to Build a Blog with Next.js",
    date: "October 15, 2025",
    content:
      "In this post, we'll explore how to build a simple blog using Next.js and TypeScript. It’s easy to get started, and Next.js makes it fast and scalable.",
  },
  {
    title: "Why TypeScript is the Future of JavaScript",
    date: "October 14, 2025",
    content:
      "TypeScript brings static typing to JavaScript, making it easier to write reliable code and avoid common errors. In this post, we'll dive into the benefits of using TypeScript.",
  },
  {
    title: "Understanding React Hooks",
    date: "October 12, 2025",
    content:
      "React hooks allow you to use state and lifecycle features in functional components. In this post, we'll explore what hooks are and how to use them effectively.",
  },
];

const BlogPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <p>Latest blog posts on web development and Next.js.</p>

      <div>
        {blogPosts.map((post, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h2>{post.title}</h2>
            <p>
              <strong>{post.date}</strong>
            </p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
