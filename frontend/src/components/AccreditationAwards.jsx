import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaTrophy } from "react-icons/fa";

export default function AccreditationAwards() {
    return (
        <section className="bg-[#F8FAFC] text-[#132669] py-24 px-6 md:px-16 shadow-inner">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Accreditation & Awards</h2>
                <p className="text-[#494D5A] text-lg">
                    Recognized for excellence in education and student development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* Accreditation */}
                <motion.div
                    className="bg-white p-8 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <FaCertificate className="text-4xl text-[#2B3CAB] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">MOE Accredited</h3>
                    <p className="text-[#494D5A]">
                        Fully certified by Ethiopia's Ministry of Education to deliver top-tier primary education.
                    </p>
                </motion.div>

                {/* Award 1 */}
                <motion.div
                    className="bg-white p-8 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <FaTrophy className="text-4xl text-[#2B3CAB] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Best Emerging School</h3>
                    <p className="text-[#494D5A]">
                        Honored for innovation and academic excellence at the Addis Ababa Education Summit.
                    </p>
                </motion.div>

                {/* Award 2 */}
                <motion.div
                    className="bg-white p-8 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <FaAward className="text-4xl text-[#2B3CAB] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Community Impact Award</h3>
                    <p className="text-[#494D5A]">
                        Recognized for contributions to early childhood education and community empowerment.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};