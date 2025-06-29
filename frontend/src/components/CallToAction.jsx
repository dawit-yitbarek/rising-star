import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
    return (
        <section className="relative bg-gradient-to-br from-[#24326A] via-[#3B4E9B] to-[#6B82D8] text-white overflow-hidden pt-20 pb-16 px-6 md:px-16 -mt-1">
            {/* Decorative Divider (Wave top) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="white">
                    <path d="M321.39 56.14C220.23 86.4 110.4 98.88 0 83.6V0h1200v27.35c-114.72 44.58-266.91 58.59-403.56 48.24C681.09 66.38 523.81 17.62 321.39 56.14z" />
                </svg>
            </div>

            {/* CTA Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">Join the Rising Star Family</h2>
                <p className="text-lg text-[#E3E8EF] mb-8">
                    Enrollment is open for Kindergarten and Grades 1–8. Take the first step in your child’s bright future.
                </p>
                <Link
                    to="/contact"
                    className="inline-block px-8 py-3 rounded-full bg-white text-[#132669] font-semibold shadow-lg hover:bg-[#F0F4F8] transition"
                >
                    Contact Us Today
                </Link>
            </div>

            {/* Decorative Divider (Wave bottom) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="white">
                    <path d="M321.39 56.14C220.23 86.4 110.4 98.88 0 83.6V0h1200v27.35c-114.72 44.58-266.91 58.59-403.56 48.24C681.09 66.38 523.81 17.62 321.39 56.14z" />
                </svg>
            </div>
        </section>
    );
};