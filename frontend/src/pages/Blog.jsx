import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import BlogList from "../components/BlogList";

export default function Blog() {
  return (
    <div className="font-serif">

      <Helmet>
        <title>Blog | Rising Star Academy</title>
        <meta name="description" content="Explore educational tips, stories, and updates from Rising Star Academy, Ethiopia’s leading institution for Kindergarten to Grade 8." />
      </Helmet>

      <HeroSection
        title={"Our Blog"}
        desc={"Explore stories, tips, and updates from Rising Star Academy — where learning never stops."}
      />
      <BlogList />
    </div>
  );
}
