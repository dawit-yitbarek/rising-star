import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSeedling } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function PhilosophySection() {
  const [animateNow, setAnimateNow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setAnimateNow(true);
  }, [location.pathname]);

  return (
    <section className="bg-white text-[#132669] py-24 px-6 md:px-16 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          animate={animateNow ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4 text-[#2B3CAB]">
            <FaSeedling className="text-2xl" />
            <span className="uppercase font-semibold tracking-wide text-sm">
              Educational Philosophy
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Learning through Play, Guided by Purpose
          </h2>

          <p className="text-[#494D5A] text-lg mb-4">
            At <strong>Rising Star Academy Kindergarten</strong>, we believe
            that the early years of a child’s life are foundational. Our
            philosophy is rooted in play-based learning, where exploration,
            creativity, and emotional growth are nurtured in a safe and joyful
            environment.
          </p>

          <p className="text-[#494D5A] text-lg">
            Our goal is to cultivate a love for learning while building strong
            social-emotional skills, independence, and confidence in every child.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          animate={animateNow ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/philosophy-kindergarten.webp"
            alt="Kindergarten philosophy"
            className="w-full max-h-[400px] object-cover rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};