import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ id, title, excerpt, date, image }) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <p className="text-sm text-[#888] mb-2">{date}</p>
          <h3 className="text-xl font-bold mb-2 text-[#132669]">{title}</h3>
        </div>
      </div>
    </Link>
  );
};