import React from "react";
import PagesMetaHead from "../components/PagesMetaHead";
// import ProjectsGrid from "../components/projects/ProjectsGrid";
import AppBanner from "../components/shared/AppBanner";
import TechShowcase from "../components/shared/TechShowcase";
import CallToAction from "../components/shared/CallToAction";

import dynamic from "next/dynamic";

// const Scene = dynamic(() => import("../components/Scene"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div className="container mx-auto space-y-16">
      {/* <Scene /> */}
      <PagesMetaHead title="Home" />
      <AppBanner />
      <TechShowcase />
      {/* <ProjectsGrid /> */}
      <CallToAction />
    </div>
  );
}
