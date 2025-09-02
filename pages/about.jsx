import AboutMeBio from "../components/about/AboutMeBio";
import PagesMetaHead from "../components/PagesMetaHead";

function about() {
  return (
    <div>
      <PagesMetaHead title="About Me" />
      <AboutMeBio />
    </div>
  );
}

export default about;
