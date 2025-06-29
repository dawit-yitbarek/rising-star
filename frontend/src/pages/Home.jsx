import React from "react";
import Hero from "../components/HomeHero";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";
import AcademicPrograms from "../components/AcademicPrograms";
import Testimonial from '../components/Testimonial'
import CallToAction from '../components/CallToAction'

export default function Home() {
  return (
    <div className="relative min-h-screen font-serif text-white">

      {/* Hero section */}
      <Hero />

      {/* Why choose us section */}
      <WhyChooseUs />

      {/* About us section */}
      <AboutUs />

      {/* Academic Programs section */}
      <AcademicPrograms />

      {/* Testimonial sectoin */}
      <Testimonial />

      {/* Call to action section */}
      <CallToAction />

    </div>
  );
};