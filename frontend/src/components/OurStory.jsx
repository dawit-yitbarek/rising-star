import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function OurStory() {
    const [animateNow, setAnimateNow] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Trigger animation on page load or navigation
        setAnimateNow(true);
    }, [location.pathname]);

    return (
        <section className="relative bg-[#F8FAFC] text-[#132669] my-24 py-16 px-6 md:px-16 shadow-inner shadow-gray-300">
            <div className="absolute top-0 left-0 w-full h-4 shadow-[inset_0_10px_12px_-4px_rgba(0,0,0,0.25)] z-5" />
            <div className="absolute bottom-0 left-0 w-full h-4 shadow-[inset_0_-10px_12px_-4px_rgba(0,0,0,0.25)] z-5" />

            <div className="relative z-20 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={animateNow ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                    <p className="text-[#494D5A] text-lg mb-4">
                        <strong>Rising Star Academy</strong> was founded with a dream to transform education
                        in Ethiopia — one student at a time. We began with a simple goal:
                        to build confident, compassionate, and curious learners.
                    </p>
                    <p className="text-[#494D5A] text-lg">
                        Over the years, we’ve grown into a vibrant learning community with
                        state-of-the-art campuses, passionate educators, and a family of
                        students who dream big and shine bright.
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
                        src="/images/our-story.webp"
                        alt="Our story illustration"
                        className="w-full max-h-[400px] rounded-xl shadow-xl object-fill object-center"
                    />
                </motion.div>
            </div>
        </section>
    );
};