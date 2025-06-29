import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogData";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === id);

  if (!blog) {
    return (
      <div className="py-24 px-6 text-center text-[#132669]">
        <h2 className="text-2xl font-bold">Blog not found.</h2>
        <Link to="/blog" className="text-blue-600 underline mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] text-[#132669] py-24 px-6 md:px-16 font-serif">

      <Helmet>
        <title>{blog.title} | Rising Star Academy Blog</title>
        <meta name="description" content={blog.content.slice(0, 150)} />
      </Helmet>


      <div className="max-w-4xl mx-auto">
        <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-xl mb-8 shadow-lg" />
        <p className="text-sm text-[#888] mb-2">{blog.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{blog.title}</h1>
        <div className="whitespace-pre-line text-[#494D5A] text-lg leading-relaxed">{blog.content}</div>
      </div>
    </div>
  );
};