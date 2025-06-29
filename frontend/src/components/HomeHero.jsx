import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "/images/hero.webp";

export default function Hero() {

    return (
        <section>
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    filter: "brightness(0.6)",
                }}
            />

            {/* Overlay Gradient */}
            <div className="absolute top-0 left-0 w-full h-screen bg-[#0D1A3C]/50 z-0" />

            {/* Foreground Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-16 pt-16">
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg"
                >
                    Education for Future Stars
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-xl text-[#E3E8EF] drop-shadow"
                >
                    Rising Star Academy empowers students from Kindergarten through Grade 8 with confidence, creativity, and character.
                </motion.p>
                <motion.div
                    className="mt-8 flex gap-4 justify-center flex-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link
                        to="/kindergarten"
                        className="px-6 py-3 rounded-full bg-[#2B3CAB] text-white font-medium hover:bg-[#132669] transition-all shadow-lg"
                    >
                        Explore Kindergarten
                    </Link>
                    <Link
                        to="/elementary"
                        className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-[#132669] transition-all shadow-lg"
                    >
                        Explore Grades 1–8
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};