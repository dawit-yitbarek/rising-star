import React from "react";
import HeroSection from "../components/HeroSection";
import BlogList from "../components/BlogList";

export default function Blog() {
  return (
    <div className="font-serif">
      <HeroSection
        title={"Our Blog"}
        desc={"Explore stories, tips, and updates from Rising Star Academy — where learning never stops."}
      />
      <BlogList />
    </div>
  );
}
