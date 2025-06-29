import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";
import EnvironmentSection from "../components/EnvironmentSection"
import CurriculumOverview from "../components/CurriculumOverview";
import FamilyEngagementSection from "../components/FamilyEngagementSection"
import CallToAction from "../components/CallToAction"

export default function Kindergarten() {
    return (
        <div className="relative min-h-screen font-serif text-[#132669]">
            <Helmet>
                <title>Kindergarten Program | Rising Star Academy</title>
                <meta
                    name="description"
                    content="Explore Rising Star Academy's nurturing kindergarten program in Ethiopia — where curiosity, creativity, and foundational learning come together in a joyful environment."
                />
            </Helmet>

            {/* Hero section */}
            <HeroSection
                title={"Welcome to Our Kindergarten"}
                desc={"A nurturing space where play, imagination, and curiosity spark lifelong learning."} />

            {/* Philosophy section */}
            <PhilosophySection />

            {/* Environment section */}
            <EnvironmentSection />

            {/* Curriculum Overview section*/}
            <CurriculumOverview />

            {/* Family Engagement section */}
            <FamilyEngagementSection />

            {/* Call to action section */}
            <CallToAction />
        </div>
    );
};