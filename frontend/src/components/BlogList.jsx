import React from "react";
import BlogCard from "./BlogCard";
import blogPosts from "../data/blogData";

export default function BlogList() {
  return (
    <section className="bg-[#F8FAFC] text-[#132669] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <BlogCard key={idx} {...post} />
        ))}
      </div>
    </section>
  );
};