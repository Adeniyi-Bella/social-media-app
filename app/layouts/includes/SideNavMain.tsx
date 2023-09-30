import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

export default function SideNavMain() {
  const pathname = usePathname();

  return (
    <>
      <div
        id="SideNavMain"
        className={`side-nav-main ${pathname === "/" ? "side-nav-main--rootPath" : ""}`}
      >
        <div className="side-nav-main__content">
          <Link href="/">
            <MenuItem
              iconString="For You"
              colorString={pathname == "/" ? "#F02C56" : ""}
              sizeString="25"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
