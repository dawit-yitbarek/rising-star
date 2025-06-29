import React from "react";
import { FaRegLightbulb, FaHeart, FaShieldAlt, FaGlobeAfrica } from "react-icons/fa";

export default function CoreValues() {
    const values = [
        {
            icon: <FaRegLightbulb className="text-3xl text-[#2B3CAB]" />,
            title: "Curiosity & Creativity",
            desc: "We foster open-minded exploration and creative thinking in every child.",
        },
        {
            icon: <FaHeart className="text-3xl text-[#2B3CAB]" />,
            title: "Compassion & Respect",
            desc: "Every learner is treated with kindness, dignity, and understanding.",
        },
        {
            icon: <FaShieldAlt className="text-3xl text-[#2B3CAB]" />,
            title: "Safety & Trust",
            desc: "We provide a secure environment for children to thrive academically and emotionally.",
        },
        {
            icon: <FaGlobeAfrica className="text-3xl text-[#2B3CAB]" />,
            title: "Cultural Identity",
            desc: "We celebrate diversity while honoring Ethiopia’s values and heritage.",
        },
    ];

    return (
        <section className="bg-[#F8FAFC] text-[#132669] py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
                <p className="text-[#494D5A] text-lg mb-12">
                    These values guide everything we do at Rising Star Academy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
                    {values.map((val, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition"
                        >
                            {val.icon}
                            <h3 className="text-xl font-semibold mt-4 mb-2">{val.title}</h3>
                            <p className="text-[#494D5A]">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};