import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';

const blogPosts = [
  {
    id: 1,
    title: 'Planning Your Dream Wedding: Top 10 Tips',
    excerpt: 'Discover the essential tips for creating the perfect wedding experience...',
    author: 'Emily Roberts',
    date: 'June 15, 2024',
    imageUrl: '/images/blog/wedding-planning.jpg',
    category: 'Wedding Planning'
  },
  {
    id: 2,
    title: 'Choosing the Perfect Wedding Venue',
    excerpt: 'Navigate the complex world of wedding venue selection with our expert guide...',
    author: 'Michael Chang',
    date: 'May 22, 2024',
    imageUrl: '/images/blog/venue-selection.jpg',
    category: 'Venues'
  },
  // Add more blog posts
];

const BlogIndex = () => {
  const [filter, setFilter] = useState('All');

  const filteredPosts = filter === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === filter);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Wedding Insights & Tips</h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-48">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No posts found in this category.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogIndex;