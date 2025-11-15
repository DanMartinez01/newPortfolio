import React from "react";
import PagesMetaHead from "../components/PagesMetaHead";
import TechShowcase from "../components/shared/TechShowcase";
// import ProfessionalTimeline from "../components/shared/ProfessionalTimeline";
import LanguageSkills from "../components/shared/LanguageSkills";
import CallToAction from "../components/shared/CallToAction";

export default function Technologies() {
  return (
    <div className="container mx-auto space-y-16">
      <PagesMetaHead
        title="Technologies & Skills | Daniela Martinez"
        description="Explore my technical skills, professional journey, certifications, and bilingual capabilities as a full-stack developer."
      />

      {/* Page Header */}
      <div className="text-center pt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-primary mb-4">
          Technologies & Skills
        </h1>
        <p className="text-lg text-text-secondary dark:text-text-secondary max-w-2xl mx-auto">
          A comprehensive look at my technical expertise, professional journey,
          and continuous learning
        </p>
      </div>

      {/* Tech Stack & Certifications */}
      <TechShowcase />

      {/* Language Skills */}
      <LanguageSkills />

      {/* Professional Timeline */}
      {/* <ProfessionalTimeline /> */}

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
