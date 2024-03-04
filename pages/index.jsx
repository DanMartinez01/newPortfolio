import Link from "next/link";
import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import Button from "../components/reusable/Button";
import AppBanner from "../components/shared/AppBanner";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Home" />
      <AppBanner />
      <ProjectsGrid />
      <Chat initialMessage={"Hi, ask me a question!"} />
    </div>
  );
}
