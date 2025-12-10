"use client";
import { useState } from "react";
import BlogCard from "../components/BlogCard";

export default function BlogPage() {
  const [activePost, setActivePost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "What is Next.js?",
      description: "A simple explanation of Next.js and how it works.",
      shortAnswer: "Next.js is a React framework for building fast, optimized websites."
    },
    {
      id: 2,
      title: "Learning React the Easy Way",
      description: "Tips for beginners to start building apps with React.",
      shortAnswer: "Start with components, props, state, and practice small projects."
    },
    {
      id: 3,
      title: "How Loading.js Works",
      description: "Understanding the Next.js App Router loading system.",
      shortAnswer: "Next.js shows loading.js when page.js is waiting for async data."
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            desc={post.description}
            shortAnswer={post.shortAnswer}
            onClick={() => setActivePost(post)}
          />
        ))}
      </div>

      {/* Popup Modal */}
      {activePost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-xxl max-w-md w-full">
            <h2 className="text-2xl font-bold">{activePost.title}</h2>
            <p className="mt-4 text-gray-700">{activePost.shortAnswer}</p>

            <button
              onClick={() => setActivePost(null)}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
