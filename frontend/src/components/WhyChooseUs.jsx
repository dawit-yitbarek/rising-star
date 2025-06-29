import React from "react";
import {
    HiAcademicCap,
    HiBookOpen,
    HiBuildingLibrary,
    HiUserGroup,
    HiChatBubbleOvalLeftEllipsis,
} from "react-icons/hi2";
import { FaLaptopCode } from "react-icons/fa6";

export default function WhyChooseUs() {
    return (
        <section className="bg-white text-[#132669] py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Rising Star Academy?</h2>
                <p className="text-[#494D5A] text-lg mb-12">
                    Discover what makes our academy the perfect place for young minds to grow, thrive, and shine.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Feature 1 */}
                    <div className="bg-[#F0F4F8] rounded-xl p-6 shadow-md hover:shadow-lg transition">
                        <HiAcademicCap className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Qualified, Caring Teachers</h3>
                        <p className="text-[#494D5A]">
                            Our experienced educators guide and inspire students with passion and care.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-[#F0F4F8] rounded-xl p-6 shadow-md hover:shadow-lg transition">
                        <HiBookOpen className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Modern Curriculum</h3>
                        <p className="text-[#494D5A]">
                            A well-rounded academic program combining tradition with innovation.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-[#F0F4F8] rounded-xl p-6 shadow-md hover:shadow-lg transition">
                        <HiBuildingLibrary className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Separate Campuses</h3>
                        <p className="text-[#494D5A]">
                            Kindergarten and Grades 1–8 operate in their own dedicated, age-appropriate branches.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-[#F0F4F8] rounded-xl p-6 shadow-md hover:shadow-lg transition">
                        <HiUserGroup className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Safe & Nurturing</h3>
                        <p className="text-[#494D5A]">
                            A secure and supportive environment where every child is valued.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-[#F0F4F8] rounded-xl p-6 shadow-md hover:shadow-lg transition">
                        <HiChatBubbleOvalLeftEllipsis className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Parent Engagement</h3>
                        <p className="text-[#494D5A]">
                            We work closely with families to ensure each child's success.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-[#F0F4F8] rounded-xl p-6 shadow-md hover:shadow-lg transition">
                        <FaLaptopCode className="text-4xl mb-4 text-[#2B3CAB]" />
                        <h3 className="text-xl font-semibold mb-2">Tech-Enhanced Learning</h3>
                        <p className="text-[#494D5A]">
                            Interactive tools and smart technology make learning exciting and future-ready.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
