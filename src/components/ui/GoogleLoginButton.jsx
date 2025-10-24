"use client";

import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

export default function GoogleLoginButton({ onSuccess }) {
  const login = useGoogleLogin({
    onSuccess,
    onError: () => console.log("Login Failed"),
    redirect_uri: "https://you-tube-orpin-xi.vercel.app/Profile",
  });

  return (
    <button
      onClick={() => login()}
      className="flex items-center justify-center gap-3 cursor-pointer bg-red-500/60 hover:bg-red-700 text-white font-medium px-4 py-2 rounded shadow-md transition duration-200"
    >
      <svg
        className="w-5 h-5"
        viewBox="0 0 533.5 544.3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M533.5 278.4c0-18.3-1.5-36-4.5-53.2H272v100.7h146.9c-6.3 34-25 62.8-53.4 82.1v68.2h86.4c50.5-46.5 79.6-115 79.6-197.8z"
          fill="#4285F4"
        />
        <path
          d="M272 544.3c72.6 0 133.6-24 178.1-65.2l-86.4-68.2c-24.1 16.1-55 25.5-91.7 25.5-70.5 0-130-47.7-151.4-111.8H33.2v70.5C77.3 486 168 544.3 272 544.3z"
          fill="#34A853"
        />
        <path
          d="M120.6 319.8c-9.8-29.5-9.8-61.6 0-91.1V158.2H33.2c-39.1 77.8-39.1 170.3 0 248.1l87.4-86.5z"
          fill="#FBBC05"
        />
        <path
          d="M272 107.7c38.8 0 73.6 13.3 101.1 39.2l75.8-75.8C405.6 24.1 344.6 0 272 0 168 0 77.3 58.3 33.2 158.2l87.4 70.5C142 155.4 201.5 107.7 272 107.7z"
          fill="#EA4335"
        />
      </svg>
      Sign in with Google
    </button>
  );
}
