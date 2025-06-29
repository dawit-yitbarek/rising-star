import React from "react";
import { motion } from "framer-motion";

export default function EnvironmentSection() {
  return (
    <section className="bg-[#F8FAFC] text-[#132669] py-24 px-6 md:px-16 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/environment-kindergarten.webp"
            alt="Kindergarten environment"
            className="w-full rounded-xl shadow-xl object-cover object-center max-h-[400px]"
            loading="lazy"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Nurturing Learning Environment
          </h2>
          <p className="text-[#494D5A] text-lg mb-4">
            Our Kindergarten campus is designed with the little learner in mind. Every classroom is colorful, safe, and thoughtfully arranged to spark imagination and promote independence.
          </p>
          <p className="text-[#494D5A] text-lg">
            From cozy reading corners to open play areas, our environment fosters creativity, collaboration, and a love for learning through exploration and hands-on discovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};