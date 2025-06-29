import React from "react";
import HeroSection from "../components/HeroSection";
import AcademicApproach from "../components/AcademicApproach";
import SubjectsAndEnrichment from "../components/SubjectsAndEnrichment"
import StudentLife from "../components/StudentLife"
import ElementaryAcademicPrograms from "../components/ElementaryAcademicPrograms"
import FacilitiesOverview from "../components/FacilitiesOverview";
import CallToAction from "../components/CallToAction"

export default function Elementary() {
    return (
        <div className="relative min-h-screen font-serif text-[#132669]">

            {/* Hero section */}
            <HeroSection
                title={"Grades 1–8 Program"}
                desc={"Empowering students with knowledge, creativity, and confidence through engaging academics and character-building experiences."}
            />

            {/* Academic Approach section */}
            <AcademicApproach />

            {/* Subject and enrichment section */}
            <SubjectsAndEnrichment />

            {/* Student life section */}
            <StudentLife />

            {/* Elementary Academic programs */}
            <ElementaryAcademicPrograms />

            {/* Facilities overview section */}
            <FacilitiesOverview />

            {/* Call To Action section */}
            <CallToAction />
        </div>
    );
};