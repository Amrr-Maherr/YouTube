import Drawer from "./Elements/NavDrawer";
import Logo from "./Elements/Logo";
import SearchBar from "./Elements/SearchBar";
import UserActions from "./Elements/UserActions";
import { Mic } from "lucide-react";
const Navbar = () => {
  return (
    <div className="w-full bg-[var(--background)] text-[var(--foreground)] border-b shadow-sm !border-0 sticky top-0 z-50 h-full">
      <div className="flex items-center justify-between flex-row-reverse container py-2  mx-auto">
        <UserActions />
        <div className="flex-1 flex items-center justify-center flex-row-reverse">
          <SearchBar />
          <div className="w-[40px] h-[40px] rounded-full items-center justify-center cursor-pointer bg-[var(--background)] hidden md:flex">
            <Mic
              size={24}
              strokeWidth={1}
              className="text-[var(--foreground)]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <Drawer />
          <div className="hidden md:block">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
