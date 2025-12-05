"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ChevronLeft, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import GoogleLoginButton from "@/components/ui/GoogleLoginButton";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      // Mock registration - in real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const userExists = existingUsers.some(user => user.email === data.email);

      if (userExists) {
        setError('email', { message: 'An account with this email already exists' });
        return;
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name: data.name.trim(),
        email: data.email.toLowerCase(),
        password: data.password, // In real app, this would be hashed
        avatar: null,
        createdAt: new Date().toISOString()
      };

      existingUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

      // Auto-login after registration
      localStorage.setItem('user', JSON.stringify({
        sub: newUser.id,
        name: newUser.name,
        email: newUser.email,
        picture: null
      }));

      router.push('/');
    } catch (error) {
      setError('root', { message: 'Registration failed. Please try again.' });
    }
  };

  const handleGoogleRegister = async (credentialResponse) => {
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
        // Add Google user to registered users
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const googleUser = {
          id: userInfo.sub,
          name: userInfo.name,
          email: userInfo.email,
          avatar: userInfo.picture,
          createdAt: new Date().toISOString(),
          provider: 'google'
        };

        const userExists = existingUsers.some(user => user.id === userInfo.sub);
        if (!userExists) {
          existingUsers.push(googleUser);
          localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
        }

        localStorage.setItem("user", JSON.stringify(userInfo));
        router.push('/');
      }
    } catch (error) {
      console.error("Google registration error:", error);
      setError('root', { message: 'Google signup failed' });
    }
  };

  // Password strength checker
  const getPasswordStrength = (password) => {
    if (password.length === 0) return { level: 0, text: '', color: '' };
    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z\d]/.test(password)) score++;

    if (score < 2) return { level: score, text: 'Weak', color: 'text-red-500' };
    if (score < 4) return { level: score, text: 'Fair', color: 'text-yellow-500' };
    if (score < 5) return { level: score, text: 'Good', color: 'text-green-500' };
    return { level: score, text: 'Strong', color: 'text-green-600' };
  };

  const passwordStrength = getPasswordStrength(password || '');

  return (
    <div className="min-h-screen bg-white dark:bg-[var(--background)] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
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
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-2">
              Create your account
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              to continue to YouTube
            </p>
          </div>

          {/* Google Register */}
          <GoogleLoginButton onSuccess={handleGoogleRegister} className="w-full mb-6"
            text="Create account with Google" />

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="px-3 text-sm text-gray-500 dark:text-gray-400">or</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* General Error */}
            {errors.root && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm p-3 rounded-lg border border-red-200 dark:border-red-800">
                {errors.root.message}
              </div>
            )}

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  }
                })}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-[var(--card)] ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
              )}
            </div>

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
                      value: 8,
                      message: "Password must be at least 8 characters"
                    },
                    validate: {
                      hasUpper: (value) => /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                      hasLower: (value) => /[a-z]/.test(value) || "Password must contain at least one lowercase letter",
                      hasNumber: (value) => /\d/.test(value) || "Password must contain at least one number"
                    }
                  })}
                  className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-[var(--card)] ${
                    errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {password && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-full rounded-full transition-all ${
                        passwordStrength.level < 2 ? 'bg-red-500' :
                        passwordStrength.level < 4 ? 'bg-yellow-500' :
                        passwordStrength.level < 5 ? 'bg-green-500' : 'bg-green-600'
                      }`}
                      style={{ width: `${(passwordStrength.level / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm ${passwordStrength.color}`}>
                    {passwordStrength.text}
                  </span>
                </div>
              )}

              {errors.password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === password || "Passwords do not match"
                  })}
                  className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-[var(--card)] ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Re-enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Password Requirements */}
            {password && (
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p className="font-medium">Password must contain:</p>
                <div className="ml-4 space-y-1">
                  <p className={password.length >= 8 ? "text-green-600 flex items-center gap-1" : ""}>
                    {password.length >= 8 && <CheckCircle className="w-3 h-3" />}
                    At least 8 characters
                  </p>
                  <p className={/[A-Z]/.test(password) ? "text-green-600 flex items-center gap-1" : ""}>
                    {/[A-Z]/.test(password) && <CheckCircle className="w-3 h-3" />}
                    One uppercase letter
                  </p>
                  <p className={/[a-z]/.test(password) ? "text-green-600 flex items-center gap-1" : ""}>
                    {/[a-z]/.test(password) && <CheckCircle className="w-3 h-3" />}
                    One lowercase letter
                  </p>
                  <p className={/\d/.test(password) ? "text-green-600 flex items-center gap-1" : ""}>
                    {/\d/.test(password) && <CheckCircle className="w-3 h-3" />}
                    One number
                  </p>
                </div>
              </div>
            )}

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
              {isSubmitting ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link href="/Login" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign in
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

export default Register;
