"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [googleActive, setGoogleActive] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "test" && password === "admin") {
      router.push("/admin"); // ✅ Route to admin
    } else {
      setError("Invalid email or password");
    }
  };

  const handleGoogleClick = () => {
    setGoogleActive(!googleActive);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow">
        {/* Logo Placeholder */}
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded bg-gray-200">
            LOGO
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold">Welcome back</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Sign in to your account
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-black/30"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-black/30"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              Remember me
            </label>
            <button
              type="button"
              className="text-gray-500 hover:text-black"
            >
              Forgot password?
            </button>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-md bg-black py-2 text-white hover:bg-gray-800"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-200"></div>
          <span className="px-2 text-sm text-gray-400">Or continue with</span>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleClick}
          className="w-full flex items-center justify-center gap-2 rounded-md border py-2 text-sm hover:bg-gray-50"
        >
          {googleActive ? (
            <span className="text-green-600 font-semibold">✔ Connected</span>
          ) : (
            <>
              <span className="text-gray-600">G</span> Login with Google
            </>
          )}
        </button>

        {/* Signup */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="#" className="font-medium text-black hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
