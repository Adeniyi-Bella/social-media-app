import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { BiSearch, BiUser } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi"



interface SearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

function SearchBar({ onChange, placeholder }: SearchBarProps) {
  return (
    <div className="topNav-searchContainer">
      <input
        type="text"
        onChange={onChange}
        className="topNav-searchInput"
        placeholder={placeholder}
      />
      <div className="topNav-searchIconContainer">
        <BiSearch color="#A1A2A7" size="22" />
      </div>
    </div>
  );
}

function ProfileMenu() {
  return (
    <div className="flex items-center">
      <div className="relative">
        <button className="topNav-profileBtn">
          <img className="rounded-full w-[35px] h-[35px]" src="https://placehold.co/400" />
        </button>
        <div className="topNav-profileMenu">
          <button className="topNav-profileMenuItem">
            <BiUser size="20" />
            <span className="pl-2 font-semibold text-sm">Profile</span>
          </button>
          <button className="topNav-logoutMenuItem">
            <FiLogOut size={20} />
            <span className="pl-2 font-semibold text-sm">Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function LoginButton() {
  return (
    <div className="flex items-center">
      <button className="topNav-loginBtn">
        <span className="whitespace-nowrap mx-4 font-medium text-[15px]">Log in</span>
      </button>
      <BsThreeDotsVertical color="#161724" size="25" />
    </div>
  );
}

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  function goTo(): void {
    console.log("go to");
  }

  return (
    <div id="TopNav" className="topNav-container">
      <div className={`topNav-innerContainer ${pathname === "/" ? "topNav-innerContainer-rootPath" : ""}`}>
        <Link href="/">
          <img className="topNav-logo" src="/images/tiktok-logo.png" />
        </Link>

        <SearchBar onChange={handleSearchName} placeholder="Search accounts" />

        <div className="topNav-actions">
          <button onClick={goTo} className="topNav-uploadBtn">
            <AiOutlinePlus color="#000000" size="22" />
            <span className="px-2 font-medium text-[15px]">Upload</span>
          </button>

          {true ? <LoginButton /> : <ProfileMenu />}
        </div>
      </div>
    </div>
  );
}
