import React from "react";
import { motion } from "framer-motion";
import {
    FaSchool,
    FaChalkboardTeacher,
    FaBookReader,
    FaFutbol,
    FaLaptop,
    FaBusAlt,
} from "react-icons/fa";

export default function CampusHighlights() {
    return (
        <section className="bg-white text-[#132669] py-24 px-6 md:px-16 shadow-inner">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Campus Highlights & Facilities
                </h2>
                <p className="text-[#494D5A] text-lg">
                    Our environment is purposefully designed to foster learning, safety,
                    and joy at every stage of development.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* Feature 1 */}
                <motion.div
                    className="bg-[#F0F4F8] p-6 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <FaSchool className="text-4xl text-[#2B3CAB] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Separate Campuses</h3>
                    <p className="text-[#494D5A]">
                        Independent facilities for Kindergarten and Grades 1–8, tailored to
                        age-specific needs.
                    </p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                    className="bg-[#F0F4F8] p-6 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <FaChalkboardTeacher className="text-4xl text-[#2B3CAB] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Smart Classrooms</h3>
                    <p className="text-[#494D5A]">
                        Modern classrooms equipped with digital boards and multimedia tools.
                    </p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                    className="bg-[#F0F4F8] p-6 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <FaBookReader className="text-4xl text-[#2B3CAB] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Well-Stocked Libraries</h3>
                    <p className="text-[#494D5A]">
                        A rich collection of books for all age groups to inspire reading.
                    </p>
                </motion.div>

                {/* Feature 4 */}
                <motion.div
                    className="bg-[#F0F4F8] p-6 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <FaFutbol className="text-4xl text-[#2B3CAB] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Playgrounds & Sports Fields</h3>
                    <p className="text-[#494D5A]">
                        Ample outdoor spaces for physical development and fun.
                    </p>
                </motion.div>

                {/* Feature 5 */}
                <motion.div
                    className="bg-[#F0F4F8] p-6 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <FaLaptop className="text-4xl text-[#2B3CAB] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">ICT Labs</h3>
                    <p className="text-[#494D5A]">
                        Hands-on exposure to technology and digital literacy from an early age.
                    </p>
                </motion.div>

                {/* Feature 6 */}
                <motion.div
                    className="bg-[#F0F4F8] p-6 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <FaBusAlt className="text-4xl text-[#2B3CAB] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">School Transport</h3>
                    <p className="text-[#494D5A]">
                        Reliable and safe school bus service covering key areas of Addis Ababa.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};