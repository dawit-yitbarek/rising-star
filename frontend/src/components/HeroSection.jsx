import React from "react";

export default function HeroSection({ title, desc }) {
    return (
        <section className="relative bg-[#0D1A3C] text-white py-24 px-6 md:px-16 text-center overflow-hidden">

            {/* Decorative Divider (Wave Top) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="white">
                    <path d="M321.39 56.14C220.23 86.4 110.4 98.88 0 83.6V0h1200v27.35..." />
                </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-[#E0E8F8] max-w-3xl mx-auto">
                {desc}
            </p>


            {/* Decorative Divider (Wave Bottom) */}
            <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg
                    className="relative block w-full h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    fill="white"
                >
                    <path d="M321.39 56.14C220.23 86.4 110.4 98.88 0 83.6V0h1200v27.35c-114.72 
      44.58-266.91 58.59-403.56 48.24C681.09 66.38 523.81 17.62 
      321.39 56.14z" />
                </svg>
            </div>

        </section>
    );
};