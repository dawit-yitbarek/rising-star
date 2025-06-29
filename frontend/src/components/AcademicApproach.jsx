import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function AcademicApproach() {
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Academic Approach</h2>
                    <p className="text-[#494D5A] text-lg mb-4">
                        At <strong>Rising Star Academy</strong>, we combine a strong academic foundation with
                        critical thinking, creativity, and real-world problem-solving.
                    </p>
                    <p className="text-[#494D5A] text-lg">
                        Students explore core subjects like Math, Science, Language, and Social Studies while also developing communication, digital, and collaborative skills to prepare them for the future.
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
                        src="/images/academic-approach.webp"
                        alt="Students in classroom"
                        className="w-full max-h-[400px] object-cover object-center rounded-xl shadow-xl"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
};