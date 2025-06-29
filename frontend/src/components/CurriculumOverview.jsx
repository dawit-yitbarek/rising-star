import React from "react";
import { motion } from "framer-motion";
import { FaPuzzlePiece, FaPaintBrush, FaBookOpen, FaHeartbeat } from "react-icons/fa";

export default function CurriculumOverview() {
    return (
        <section className="bg-white text-[#132669] py-24 px-6 md:px-16 shadow-inner">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Curriculum Overview</h2>
                <p className="text-[#494D5A] text-lg">
                    Our curriculum blends structured learning with creative exploration to help children grow intellectually, socially, and emotionally.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {/* Area 1 */}
                <motion.div
                    className="bg-[#F0F4F8] p-6 rounded-xl shadow hover:shadow-lg transition"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <FaBookOpen className="text-3xl text-[#2B3CAB] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Literacy & Language</h3>
                    <p className="text-[#494D5A]">
                        Developing early reading, listening, and speaking skills through stories, songs, and conversation.
                    </p>
                </motion.div>

                {/* Area 2 */}
                <motion.div
                    className="bg-[#F0F4F8] p-6 rounded-xl shadow hover:shadow-lg transition"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <FaPuzzlePiece className="text-3xl text-[#2B3CAB] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Cognitive Skills</h3>
                    <p className="text-[#494D5A]">
                        Encouraging curiosity, memory, reasoning, and problem-solving through hands-on learning.
                    </p>
                </motion.div>

                {/* Area 3 */}
                <motion.div
                    className="bg-[#F0F4F8] p-6 rounded-xl shadow hover:shadow-lg transition"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <FaPaintBrush className="text-3xl text-[#2B3CAB] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Creative Arts</h3>
                    <p className="text-[#494D5A]">
                        Nurturing imagination through art, music, dance, and storytelling activities.
                    </p>
                </motion.div>

                {/* Area 4 */}
                <motion.div
                    className="bg-[#F0F4F8] p-6 rounded-xl shadow hover:shadow-lg transition"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <FaHeartbeat className="text-3xl text-[#2B3CAB] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Social & Emotional</h3>
                    <p className="text-[#494D5A]">
                        Building confidence, empathy, cooperation, and self-regulation through guided play and group work.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};