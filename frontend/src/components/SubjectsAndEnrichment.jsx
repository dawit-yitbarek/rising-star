import React from "react";
import { FaMicroscope, FaMusic, FaPalette, FaFootballBall, FaGlobeAfrica } from "react-icons/fa";

export default function SubjectsAndEnrichment() {
  return (
    <section className="bg-white text-[#132669] pb-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Subjects & Enrichment</h2>
        <p className="text-[#494D5A] text-lg mb-12">
          Our curriculum goes beyond textbooks. We combine strong academic foundations with enrichment activities that spark creativity and critical thinking.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
          {/* Science */}
          <div className="bg-[#F0F4F8] rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaMicroscope className="text-3xl text-[#2B3CAB] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Science & Discovery</h3>
            <p className="text-[#494D5A]">
              Hands-on experiments and inquiry-based learning to explore how the world works.
            </p>
          </div>

          {/* Music & Art */}
          <div className="bg-[#F0F4F8] rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaMusic className="text-3xl text-[#2B3CAB] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Music & Art</h3>
            <p className="text-[#494D5A]">
              Creative expression through drawing, painting, singing, and rhythm activities.
            </p>
          </div>

          {/* Physical Education */}
          <div className="bg-[#F0F4F8] rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaFootballBall className="text-3xl text-[#2B3CAB] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Physical Education</h3>
            <p className="text-[#494D5A]">
              Daily movement and team sports that build strength, agility, and teamwork.
            </p>
          </div>

          {/* Global Citizenship */}
          <div className="bg-[#F0F4F8] rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaGlobeAfrica className="text-3xl text-[#2B3CAB] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Citizenship</h3>
            <p className="text-[#494D5A]">
              Lessons in culture, ethics, and sustainability to foster global awareness.
            </p>
          </div>

          {/* Visual Arts */}
          <div className="bg-[#F0F4F8] rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaPalette className="text-3xl text-[#2B3CAB] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visual Arts</h3>
            <p className="text-[#494D5A]">
              Students explore color, form, and imagination through guided art projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};