"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/atoms/ui/sheet";
import {
  Menu,
  Home,
  Compass,
  Video,
  Clock,
  Library,
  Heart,
  Clock3,
  Flame,
  Music,
  Gamepad2,
  Settings,
  User,
  LogIn,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

export default function NavDrawer() {
  const [user] = useLocalStorage("user", null);
  const router = useRouter();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Video, label: "Subscriptions", href: "/Subscriptions", auth: true },
    { icon: Clock, label: "History", href: "/History", auth: true },
    { icon: Flame, label: "Trending", href: "/Trending" },
  ];

  const libraryItems = [
    { icon: Library, label: "Library", href: "/Playlists", auth: true },
    { icon: Heart, label: "Liked videos", href: "/LikedVideos", auth: true },
    { icon: Clock3, label: "Watch later", href: "/WatchLater", auth: true },
  ];

  const authActions = user ? [
    { icon: LogOut, label: "Sign out", action: handleLogout },
  ] : [
    { icon: LogIn, label: "Sign in", href: "/Login" },
    { icon: User, label: "Create account", href: "/Register" },
  ];

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/");
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--background)]">
          <Menu className="text-[var(--foreground)] w-[24px] h-[24px]" />
        </div>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[240px] p-2 bg-[var(--background)] text-[var(--foreground)] border-r border-[#303030] overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle className="text-lg font-bold mb-3">
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-6 px-4 py-2 rounded-lg hover:bg-[var(--background)] text-sm"
              >
                <Icon size={22} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="my-1 border-t border-[#303030]" />

        <nav className="flex flex-col">
          {libraryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-6 px-4 py-2 rounded-lg hover:bg-[var(--background)] text-sm"
              >
                <Icon size={22} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>



        <div className="my-3 border-t border-[#303030]" />
        {/* Divider before Profile */}

        <Link
          href="/Profile"
          className="flex items-center gap-6 px-4 py-2 rounded-lg hover:bg-[var(--background)] text-sm"
        >
          <User size={22} />
          <span>Profile</span>
        </Link>
        <div className="my-2 border-t border-[#303030]" />
        <nav className="flex flex-col">
          <Link
            href="/Settings"
            className="flex items-center gap-6 px-4 py-2 rounded-lg hover:bg-[var(--background)] text-sm"
          >
            <Settings size={22} />
            <span>Settings</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
