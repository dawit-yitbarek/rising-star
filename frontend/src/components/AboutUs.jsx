import React from "react";
import { motion } from "framer-motion";
import { FaSchool } from "react-icons/fa";

export default function AboutUs() {
    return (
        <section className="relative bg-[#F8FAFC] text-[#132669] py-24 px-6 md:px-16 overflow-hidden">

            {/* Decorative Divider (Wave Top) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#2B3CAB">
                    <path d="M321.39 56.14C220.23 86.4 110.4 98.88 0 83.6V0h1200v27.35c-114.72 44.58-266.91 58.59-403.56 48.24C681.09 66.38 523.81 17.62 321.39 56.14z" />
                </svg>
            </div>


            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 z-10 relative">
                {/* Text Content */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-4 text-[#2B3CAB]">
                        <FaSchool className="text-2xl" />
                        <span className="uppercase font-semibold tracking-wide text-sm">About Us</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                        Who We Are
                    </h2>

                    <p className="text-[#494D5A] text-lg mb-4">
                        <strong>Rising Star Academy</strong> is a place where children are empowered to grow with purpose, passion, and confidence.
                        Since our founding, we’ve provided a safe, inclusive, and academically rich environment that nurtures young minds from <span className="text-[#2B3CAB] font-medium">Kindergarten through Grade 8</span>.
                    </p>

                    <p className="text-[#494D5A] text-lg">
                        With dedicated campuses for different age groups, we ensure every child receives personalized care and age-appropriate learning experiences.
                        Our mission is to build strong academic and emotional foundations to prepare students for a bright future.
                    </p>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/images/about-school.webp"
                        alt="About Rising Star Academy"
                        className="w-full rounded-xl shadow-xl object-cover"
                        loading="lazy"
                    />
                </motion.div>
            </div>

            {/* Decorative Divider (Wave Bottom) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#2B3CAB">
                    <path d="M321.39 56.14C220.23 86.4 110.4 98.88 0 83.6V0h1200v27.35c-114.72 44.58-266.91 58.59-403.56 48.24C681.09 66.38 523.81 17.62 321.39 56.14z" />
                </svg>
            </div>
        </section>
    );
};