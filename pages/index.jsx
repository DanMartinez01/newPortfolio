// import PagesMetaHead from "../components/PagesMetaHead";
// import ProjectsGrid from "../components/projects/ProjectsGrid";
// import AppBanner from "../components/shared/AppBanner";
// import Chat from "../components/Chat";
// import dynamic from "next/dynamic";

// const Scene = dynamic(() => import("../components/Scene"), {
//   ssr: false,
// });

// export default function Home() {
//   return (
//     <div className="container mx-auto">
//       <Scene />
//       <PagesMetaHead title="Home" />
//       <AppBanner />
//       <ProjectsGrid />
//       <Chat initialMessage={"Ask me a question!"} />
//     </div>
//   );
// }

import React from "react";
import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import AppBanner from "../components/shared/AppBanner";
import Chat from "../components/Chat";
import FloatingBubble from "../components/FloatingBubble";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("../components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container mx-auto">
      <Scene />
      <PagesMetaHead title="Home" />
      <AppBanner />
      <ProjectsGrid />
      <FloatingBubble />
    </div>
  );
}
