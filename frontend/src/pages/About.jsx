import React from "react";
import HeroSection from "../components/HeroSection";
import OurStory from "../components/OurStory";
import CoreValues from "../components/CoreValues";
import MissionVision from "../components/MissionVision";
import AccreditationAwards from "../components/AccreditationAwards";
import CampusHighlights from "../components/CampusHighlights";
import CallToAction from "../components/CallToAction";

export default function About() {
    return (
        <main className="relative min-h-screen text-white font-serif bg-white">
            {/* Hero section */}
            <HeroSection 
                title={"About Rising Star Academy"}
                desc={"Inspiring curiosity, building character, and nurturing the future of Ethiopia's bright young minds."}
            />

            {/* Our Story section */}
            <OurStory />

            {/* Accreditation and Awards section */}
            <AccreditationAwards />

            {/* Campus Highlights section */}
            <CampusHighlights />

            {/* Core values section */}
            <CoreValues />

            {/* Mission and Vision section */}
            <MissionVision />

            {/* Call To Action Section */}
            <CallToAction />
        </main>
    );
};
