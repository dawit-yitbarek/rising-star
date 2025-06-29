import React from "react";
import HeroSection from "../components/HeroSection"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTelegramPlane, FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-[#F8FAFC] text-[#132669]">

      {/* Hero section */}
      <HeroSection
        title={"Get in Touch With Us"}
        desc={"Whether you have a question, feedback, or just want to say hello — we’re here to help. Reach out to our team and we’ll get back to you as soon as possible."}
      />

      <div className="max-w-4xl mx-auto mt-10 py-16 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-[#494D5A] mb-6">
            We'd love to hear from you. Whether you have a question or want to book a visit, feel free to reach out.
          </p>

          <div className="space-y-4 text-[#494D5A] text-sm">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#2B3CAB]" />
              <span>Gurd Shola, Addis Ababa, Ethiopia</span>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#2B3CAB]" />
              <span>+251 953 239 367</span>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#2B3CAB]" />
              <span>contact@risingstaracademy.et</span>
            </p>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">Follow us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-[#2B3CAB] hover:text-[#1e2f7a] transition text-xl">
                <FaFacebookF />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Visit our Telegram channel" className="text-[#2B3CAB] hover:text-[#1e2f7a] transition text-xl">
                <FaTelegramPlane />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Tiktok page" className="text-[#2B3CAB] hover:text-[#1e2f7a] transition text-xl">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3CAB]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Your Phone</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3CAB]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3CAB]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#2B3CAB] text-white px-6 py-2 rounded-md hover:bg-[#1e2f7a] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};