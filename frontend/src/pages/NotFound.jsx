import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#F8FAFC] text-[#132669] px-6">
            <div className="text-center max-w-lg">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-[#2B3CAB] text-white rounded-full font-medium hover:bg-[#132669] transition"
                >
                    Go Back Home
                </Link>
            </div>
        </section>
    );
};