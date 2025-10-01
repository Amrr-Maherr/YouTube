"use client";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
function ThemeButton() {
  const { setTheme } = useTheme();
  const [Mode, setMode] = useState(false);
  useEffect(() => {
    setTheme(Mode ? "light" : "dark");
  }, [Mode]);
  
  console.log(Mode);
  
  return (
    <Switch
      checked={Mode ? true : false}
      onClick={() => setMode(!Mode)}
      className="data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-[#303030]"
    />
  );
}

export default ThemeButton;
