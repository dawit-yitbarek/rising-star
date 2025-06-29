import React from "react";
import { motion } from "framer-motion";
import { HiComputerDesktop, HiBuildingLibrary, HiSparkles } from "react-icons/hi2";
import { FaChalkboardTeacher, FaVolleyballBall } from "react-icons/fa";
import { MdLocalDining } from "react-icons/md";

export default function FacilitiesOverview() {
    return (
        <section className="bg-[#F4F7FB] text-[#132669] py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Campus Facilities
                </motion.h2>
                <p className="text-[#494D5A] text-lg mb-12">
                    A purpose-built campus that inspires learning, growth, and imagination every day.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                    {/* Facility 1 */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaChalkboardTeacher className="text-3xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Modern Classrooms</h3>
                        <p className="text-[#494D5A]">Equipped with interactive boards, bright lighting, and flexible seating.</p>
                    </div>

                    {/* Facility 2 */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <HiComputerDesktop className="text-3xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">ICT & Robotics Lab</h3>
                        <p className="text-[#494D5A]">Hands-on digital learning and tech exploration for the future.</p>
                    </div>

                    {/* Facility 3 */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <HiBuildingLibrary className="text-3xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Well-Stocked Library</h3>
                        <p className="text-[#494D5A]">A peaceful space full of books, magazines, and digital resources.</p>
                    </div>

                    {/* Facility 4 */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaVolleyballBall className="text-3xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Sports Grounds</h3>
                        <p className="text-[#494D5A]">Dedicated areas for football, volleyball, athletics, and physical education.</p>
                    </div>

                    {/* Facility 5 */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <MdLocalDining className="text-3xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Cafeteria</h3>
                        <p className="text-[#494D5A]">Nutritious meals and snacks in a clean, welcoming environment.</p>
                    </div>

                    {/* Facility 6 */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <HiSparkles className="text-3xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Creative Studios</h3>
                        <p className="text-[#494D5A]">Art, music, and performance spaces that foster creativity and self-expression.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};