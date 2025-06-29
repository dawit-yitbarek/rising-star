import React from "react";
import { motion } from "framer-motion";

export default function FamilyEngagementSection() {
  return (
    <section className="bg-white text-[#132669] pb-20 pt-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">

        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnering with Families</h2>
          <p className="text-[#494D5A] text-lg mb-4">
            At <strong>Rising Star Academy</strong>, we believe education is a shared journey.
            That’s why we actively involve families in every step of their child’s growth and discovery.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#494D5A] text-base">
            <li>Regular parent-teacher meetings & progress updates</li>
            <li>Invitations to classroom events and school showcases</li>
            <li>Weekly newsletters and communication portals</li>
            <li>Opportunities to volunteer and participate in learning</li>
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/family-engagement-kindergarten.webp"
            alt="Family involvement in school"
            className="w-full max-h-[400px] rounded-xl shadow-xl object-cover object-center"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};