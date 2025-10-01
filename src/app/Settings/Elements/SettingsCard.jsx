// src/components/Settings/SettingsCard.jsx
"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import ThemeButton from "./ThemeButton";

export default function SettingsCard({
  title,
  icon: Icon,
  description,
  switchEnabled = false,
  defaultChecked = false,
  switchType = false,
}) {
  return (
    <Card className="bg-[var(--background)] border-[#303030] text-[var(--foreground)]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon size={20} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-400">
        {switchType ? (
          <ThemeButton />
        ) : switchEnabled ? (
          <div className="flex items-center justify-between">
            <span>{description}</span>
            <Switch
              className="data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-[#303030]"
            />
          </div>
        ) : (
          <span>{description}</span>
        )}
      </CardContent>
    </Card>
  );
}
