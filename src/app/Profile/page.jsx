"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GoogleLoginButton from "@/components/ui/GoogleLoginButton";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("userData");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser(parsed);
      } catch (e) {
        console.error("Failed to parse userData:", e);
        localStorage.removeItem("userData");
      }
    }
    setLoading(false);
  }, []);

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      console.log("Google Response:", credentialResponse);

      const accessToken = credentialResponse.access_token;
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const userInfo = await res.json();
      console.log("User Info:", userInfo);

      localStorage.setItem("userData", JSON.stringify(userInfo));
      setUser(userInfo);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("userData");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 py-8">
      <div className="container mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src={user?.picture || "https://i.pravatar.cc/150?img=12"}
              />
              <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-semibold">
                {user
                  ? user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                  : "AM"}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">{user?.name || "Guest"}</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {user ? user.email : "Not logged in"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:mx-0 mx-auto">
            {!user ? (
              <GoogleLoginButton onSuccess={handleGoogleLogin} />
            ) : (
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-red-500 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950/20 px-4 py-2 rounded-lg"
              >
                Sign out
              </Button>
            )}
          </div>
        </div>

        {/* Your Channel Section */}
        <Card className="border border-slate-200 dark:border-slate-700 bg-black shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h2 className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Your YouTube Channel
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              This is how your channel appears publicly on YouTube. You need a
              channel to upload your videos, comment, or create playlists.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-[#065fd4] hover:bg-[#065fd4]/90 text-white px-6 py-2 rounded-lg font-medium flex-1 sm:flex-none">
                Your Channel
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-2 rounded-lg font-medium flex-1 sm:flex-none"
              >
                Channel Status & Features
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-2 rounded-lg font-medium flex-1 sm:flex-none"
              >
                Create New Channel
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-2 rounded-lg font-medium flex-1 sm:flex-none"
              >
                View Advanced Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Account Section */}
        <Card className="border border-slate-200 bg-black dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h2 className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Account
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Your Google account is used to sign in to YouTube.
            </p>
            {user ? (
              <Button className="bg-[#065fd4] hover:bg-[#065fd4]/90 text-white px-6 py-2 rounded-lg font-medium">
                Manage Google Account
              </Button>
            ) : (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Sign in to manage your Google account.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Family Center Section */}
        <Card className="border border-slate-200 bg-black dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h2 className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Family Center
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Manage kids’ profiles and teen features. Tools allow linking
              parent accounts to kids or teen accounts on YouTube.
            </p>
            <Button
              variant="outline"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-2 rounded-lg font-medium"
            >
              Set up Family Center
            </Button>
          </CardContent>
        </Card>

        {/* Subscription Section */}
        <Card className="border border-slate-200 bg-black dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h2 className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Subscription
            </h2>
            {user ? (
              <>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                  You don’t have a subscription | Get YouTube Premium
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  YouTube Premium lets you listen to music uninterrupted, watch
                  videos without ads, and enjoy other features.
                </p>
                <Button className="bg-[#065fd4] hover:bg-[#065fd4]/90 text-white px-6 py-2 rounded-lg font-medium">
                  Get Premium
                </Button>
              </>
            ) : (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Please sign in to see subscription options.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
