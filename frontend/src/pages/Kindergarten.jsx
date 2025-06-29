import React from "react";
import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";
import EnvironmentSection from "../components/EnvironmentSection"
import CurriculumOverview from "../components/CurriculumOverview";
import FamilyEngagementSection from "../components/FamilyEngagementSection"
import CallToAction from "../components/CallToAction"

export default function Kindergarten() {
    return (
        <div className="relative min-h-screen font-serif text-[#132669]">

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