"use client";
import { Switch } from "@/components/atoms/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
function ThemeButton() {
  const { setTheme } = useTheme();
  const [Mode, setMode] = useState();
  // Fixed useEffect for initial theme load (run only on mount)
  useEffect(() => {
    const themeCode = localStorage.getItem("theme");
    const isLight = themeCode === "light";
    setMode(isLight);
    setTheme(isLight ? "light" : "dark");
  }, []); // Empty dependency: run once on mount

  // Separate useEffect for updates when Mode changes (save to localStorage)
  useEffect(() => {
    const newTheme = Mode ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [Mode, setTheme]); // Depend on Mode to update on toggle
  return (
    <Switch
      checked={Mode ? true : false}
      onClick={() => setMode(!Mode)}
      className="data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-[#303030]"
    />
  );
}

export default ThemeButton;
