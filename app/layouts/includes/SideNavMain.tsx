import { usePathname } from "next/navigation";
import MenuItems from "./sidenavbarComponents/MenuItems";
import SuggestedAccounts from "./sidenavbarComponents/SuggestedAccounts";
import FollowingAccounts from "./sidenavbarComponents/FollowingAccounts";
import Footer from "./sidenavbarComponents/Footer";

export default function SideNavMain() {
  const pathname = usePathname();

  return (
    <div
      id="SideNavMain"
      className={`side-nav-main ${
        pathname === "/" ? "side-nav-main--rootPath" : ""
      }`}
    >
      <div className="side-nav-main__content">
        <MenuItems pathname={pathname} />
        <SuggestedAccounts />
        {true ? <FollowingAccounts /> : null}
        <Footer />
        <div className="pb-14"></div>
      </div>
    </div>
  );
}
