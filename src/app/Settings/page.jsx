// src/app/settings/page.jsx (أو src/pages/SettingsPage.jsx)
"use client";
import Navbar from "@/components/Navbar/Navbar";
import {
  User,
  Lock,
  Bell,
  Monitor,
  Globe,
  Info,
  PlayCircle,
  CreditCard,
  Link as LinkIcon,
} from "lucide-react";
import SettingsCard from "./Elements/SettingsCard";

export default function SettingsPage() {
  return (
    <>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Account */}
          <SettingsCard
            title="Account"
            icon={User}
            description="Manage your personal information and account settings."
          />

          {/* Privacy */}
          <SettingsCard
            title="Privacy"
            icon={Lock}
            description="Control your privacy preferences and data."
            switchEnabled={true}
          />

          {/* Notifications */}
          <SettingsCard
            title="Notifications"
            icon={Bell}
            description="Adjust your notification settings."
            switchEnabled={true}
          />

          {/* Appearance */}
          <SettingsCard
            title="Appearance"
            icon={Monitor}
            description="Dark theme"
            switchEnabled={true}
            defaultChecked={true}
            switchType={true}
          />

          {/* Playback */}
          <SettingsCard
            title="Playback"
            icon={PlayCircle}
            description="Play HD on Wi-Fi only"
            switchEnabled={true}
          />

          {/* Connected Apps */}
          <SettingsCard
            title="Connected Apps"
            icon={LinkIcon}
            description="Manage apps connected to your account."
          />

          {/* Billing & Payments */}
          <SettingsCard
            title="Billing & Payments"
            icon={CreditCard}
            description="View and update your payment methods and subscriptions."
          />

          {/* Language & Location */}
          <SettingsCard
            title="Language & Location"
            icon={Globe}
            description="Manage your language preferences and location settings."
          />

          {/* About */}
          <SettingsCard
            title="About"
            icon={Info}
            description="Learn more about this app."
          />
        </div>
      </div>
    </>
  );
}
