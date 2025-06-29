import React from "react";
import { motion } from "framer-motion";

export default function StudentLife() {
    return (
        <section className="bg-[#F4F7FB] text-[#132669] py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Student Life & Culture</h2>
                    <p className="text-[#494D5A] text-lg mb-4">
                        Our school is more than a place to study — it's a community where students grow, collaborate, and thrive.
                    </p>
                    <p className="text-[#494D5A] text-lg">
                        From leadership opportunities to cultural celebrations, clubs, and house activities, we create space for every student to shine.
                    </p>
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
                        src="/images/student-life.webp"
                        alt="Student life at Rising Star"
                        className="w-full max-h-[400px] rounded-xl shadow-xl object-cover object-center"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
};