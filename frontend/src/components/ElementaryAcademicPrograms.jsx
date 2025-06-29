import React from "react";
import { motion } from "framer-motion";
import {
    HiLightBulb,
    HiGlobeAlt,
    HiCalculator,
    HiPaintBrush,
    HiMusicalNote,
    HiUsers,
} from "react-icons/hi2";

export default function ElementaryAcademicPrograms() {
    return (
        <section className="bg-white text-[#132669] py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Academic Programs
                </motion.h2>
                <p className="text-[#494D5A] text-lg mb-12">
                    We offer a dynamic curriculum that blends strong academics with creativity, technology, and real-world learning.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Program 1 */}
                    <div className="bg-[#F0F4F8] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <HiLightBulb className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Critical Thinking</h3>
                        <p className="text-[#494D5A]">We encourage inquiry, problem-solving, and innovation through all subjects.</p>
                    </div>

                    {/* Program 2 */}
                    <div className="bg-[#F0F4F8] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <HiCalculator className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Math & Science</h3>
                        <p className="text-[#494D5A]">Strong foundations in STEM through labs, experiments, and interactive projects.</p>
                    </div>

                    {/* Program 3 */}
                    <div className="bg-[#F0F4F8] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <HiGlobeAlt className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Languages & Humanities</h3>
                        <p className="text-[#494D5A]">Develop global perspectives through Amharic, English, social studies, and civics.</p>
                    </div>

                    {/* Program 4 */}
                    <div className="bg-[#F0F4F8] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <HiPaintBrush className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Arts & Expression</h3>
                        <p className="text-[#494D5A]">Nurturing creativity through drawing, crafts, theatre, and more.</p>
                    </div>

                    {/* Program 5 */}
                    <div className="bg-[#F0F4F8] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <HiMusicalNote className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Music & Performance</h3>
                        <p className="text-[#494D5A]">Explore rhythm, voice, and instruments in a joyful learning environment.</p>
                    </div>

                    {/* Program 6 */}
                    <div className="bg-[#F0F4F8] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <HiUsers className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Leadership & Clubs</h3>
                        <p className="text-[#494D5A]">Empowering students through house systems, student council, and extracurriculars.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};