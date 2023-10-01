import MenuItem from "./MenuItem";
import Link from "next/link";

interface MenuItemsProps {
  pathname: string;
}

export default function MenuItems({ pathname }: MenuItemsProps) {
  return (
    <>
      <Link href="/">
        <MenuItem
          iconString="For You"
          colorString={pathname === "/" ? "#F02C56" : ""}
          sizeString="25"
        />
      </Link>
      <MenuItem iconString="Following" colorString="#000000" sizeString="25" />
      <MenuItem iconString="LIVE" colorString="#000000" sizeString="25" />
    </>
  );
}
