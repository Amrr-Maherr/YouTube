"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import GoogleLoginButton from "@/components/atoms/ui/GoogleLoginButton";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      // Mock login - in real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Check against localStorage users
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const user = users.find(u => u.email === data.email && u.password === data.password);

      if (user) {
        localStorage.setItem('user', JSON.stringify({
          sub: user.id,
          name: user.name,
          email: user.email,
          picture: user.avatar || null
        }));
        router.push('/');
      } else {
        setError('root', { message: 'Invalid email or password' });
      }
    } catch (error) {
      setError('root', { message: 'Login failed. Please try again.' });
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const accessToken = credentialResponse.access_token;
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const userInfo = await res.json();

      if (userInfo) {
        localStorage.setItem("user", JSON.stringify(userInfo));
        router.push('/');
      }
    } catch (error) {
      console.error("Google login error:", error);
      setError('root', { message: 'Google login failed' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[var(--background)] flex items-center justify-center p-4">
      <div className="max-w-sm w-full space-y-8">
        {/* Back Button */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Back to YouTube</span>
          </Link>
        </div>

        {/* Main Form */}
        <div className="bg-white dark:bg-[var(--card)] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          {/* YouTube Logo */}
          <div className="text-center mb-8">
            <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 24 24">
              <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Sign in
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              to continue to YouTube
            </p>
          </div>

          {/* Google Login */}
          <GoogleLoginButton onSuccess={handleGoogleLogin} className="w-full mb-4" />

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="px-3 text-sm text-gray-500 dark:text-gray-400">or</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* General Error */}
            {errors.root && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm p-3 rounded-lg border border-red-200 dark:border-red-800">
                {errors.root.message}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email"
                  }
                })}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-[var(--card)] ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                  className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-[var(--card)] ${
                    errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          {/* Forgot Password */}
          <div className="mt-4 text-center">
            <Link href="#" className="text-sm text-blue-600 hover:text-blue-700">
              Forgot password?
            </Link>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <Link href="/Register" className="text-blue-600 hover:text-blue-700 font-medium">
                Create account
              </Link>
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-400">
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            <Link href="#" className="hover:underline">Help</Link>
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
          </div>
          <p>YouTube Clone © 2025</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
