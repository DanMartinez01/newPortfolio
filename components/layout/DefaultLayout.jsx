import AppHeader from "../shared/AppHeader";
import AppFooter from "../shared/AppFooter";
import PagesMetaHead from "../PagesMetaHead";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div className="pt-20 sm:pt-24">{children}</div>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
