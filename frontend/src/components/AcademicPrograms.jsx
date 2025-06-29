import React from "react";
import { Link } from "react-router-dom";

export default function AcademicPrograms() {
  return (
    <section className="bg-white text-[#132669] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Academic Programs</h2>
        <p className="text-[#494D5A] text-lg mb-12">
          We offer age-appropriate, future-focused learning environments for students at every stage of their early academic journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Kindergarten Program */}
          <div className="bg-[#F0F4F8] rounded-xl p-8 shadow-md hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Kindergarten</h3>
              <p className="text-[#494D5A] mb-4">
                A nurturing space where play meets learning. We focus on emotional, social, and cognitive development through hands-on exploration and guided discovery.
              </p>
              <img
                src="/images/kindergarten.webp"
                alt="Kindergarten"
                className="w-full h-56 object-cover rounded-lg shadow mb-4"
                loading="lazy"
              />
            </div>
            <Link
              to="/kindergarten"
              className="mt-auto inline-block px-6 py-2 bg-[#2B3CAB] text-white rounded-full font-medium hover:bg-[#132669] transition"
            >
              Learn More
            </Link>
          </div>

          {/* Grades 1–8 Program */}
          <div className="bg-[#F0F4F8] rounded-xl p-8 shadow-md hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Grades 1–8</h3>
              <p className="text-[#494D5A] mb-4">
                A strong academic foundation built on critical thinking, creativity, and values. Our curriculum combines modern techniques with proven educational principles.
              </p>
              <img
                src="/images/elementary.webp"
                alt="Elementary School"
                className="w-full h-56 object-cover rounded-lg shadow mb-4"
                loading="lazy"
              />
            </div>
            <Link
              to="/elementary"
              className="mt-auto inline-block px-6 py-2 bg-[#2B3CAB] text-white rounded-full font-medium hover:bg-[#132669] transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};