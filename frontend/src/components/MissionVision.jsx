import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
    return (
        <section className="bg-[#F8FAFC] text-[#132669] pb-24 pt-6 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Our Mission & Vision
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <FaBullseye className="text-3xl text-[#2B3CAB]" />
                            <h3 className="text-2xl font-bold">Our Mission</h3>
                        </div>
                        <p className="text-[#494D5A] text-lg">
                            To cultivate a safe, inclusive, and empowering learning environment
                            that fosters academic excellence, creativity, and strong moral values
                            in every student.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <FaEye className="text-3xl text-[#2B3CAB]" />
                            <h3 className="text-2xl font-bold">Our Vision</h3>
                        </div>
                        <p className="text-[#494D5A] text-lg">
                            To be Ethiopia’s leading academy for early education by inspiring
                            confident, compassionate, and future-ready learners who make a
                            positive impact in their communities and the world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
