"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Mail, Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"

interface AuthCardProps {
  isLoading: boolean
  email: string
  setEmail: (email: string) => void
  password: string
  setPassword: (password: string) => void
  rememberMe: boolean
  setRememberMe: (remember: boolean) => void
  onSignIn: (e: React.FormEvent) => void
  onSignUp: (e: React.FormEvent) => void
  onSocialLogin: (provider: string) => void
  onForgotPassword: () => void
}

export function AuthCard({
  isLoading,
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  onSignIn,
  onSignUp,
  onSocialLogin,
  onForgotPassword,
}: AuthCardProps) {
  const [activeTab, setActiveTab] = useState("signup")
  const [firstName, setFirstName] = useState("John")
  const [lastName, setLastName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const cardElement = cardRef.current
    if (cardElement) {
      cardElement.addEventListener("mousemove", handleMouseMove)
      return () => cardElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleRedirect = () => {
    toast.success("Redirecting to YouTube channel...")
    window.open("https://www.youtube.com/@diecastbydollarall", "_blank")
  }

  return (
    <div className="w-full max-w-md mx-auto relative">
      <div
        className="absolute inset-0 rounded-[32px] p-[2px]"
        style={{
          background: `
            conic-gradient(
              from ${(Math.atan2(mousePosition.y - 250, mousePosition.x - 200) * 180) / Math.PI}deg at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(255, 255, 255, 0.8) 0deg,
              rgba(255, 255, 255, 0.6) 60deg,
              rgba(255, 255, 255, 0.4) 120deg,
              rgba(255, 255, 255, 0.2) 180deg,
              rgba(255, 255, 255, 0.1) 240deg,
              rgba(255, 255, 255, 0.3) 300deg,
              rgba(255, 255, 255, 0.8) 360deg
            )
          `,
        }}
      >
        <div className="w-full h-full bg-black rounded-[30px]" />
      </div>

      <div
        ref={cardRef}
        className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl relative z-10"
      >
        {/* Header with tabs and close button */}
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex backdrop-blur-sm rounded-full p-1 border border-white/10 text-center flex-row text-white bg-black">
            <button
              onClick={() => setActiveTab("signup")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === "signup"
                  ? "bg-white/20 backdrop-blur-sm text-white border border-white/20 shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              Sign up
            </button>
            <button
              onClick={() => setActiveTab("signin")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === "signin"
                  ? "bg-white/20 backdrop-blur-sm text-white border border-white/20 shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              Sign in
            </button>
          </div>
          <button className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-black/40 transition-all duration-200 hover:scale-110 hover:rotate-90 relative z-10">
            <X className="w-5 h-5 text-white/80" />
          </button>
        </div>

        <h1 className="text-3xl font-normal text-white mb-8 transition-all duration-300 relative z-10">
          {activeTab === "signup" ? "Create an account" : "Welcome back"}
        </h1>

        <div className="relative overflow-hidden z-10">
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              activeTab === "signup" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 absolute inset-0"
            }`}
          >
            {/* Sign Up Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                toast.success("Account created successfully!")
                handleRedirect()
              }}
              className="space-y-4"
            >
              {/* Name fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                    placeholder="First name"
                  />
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 pl-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 transition-colors duration-200" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 pl-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="Enter your email"
                />
              </div>

              {/* Confirm Password field */}
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 pr-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors duration-200"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Create account button */}
              <Button
                type="submit"
                className="w-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 text-white font-medium rounded-2xl h-14 mt-8 text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] mx-auto flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create an account"}
              </Button>
            </form>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out transform ${
              activeTab === "signin" ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 absolute inset-0"
            }`}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                toast.success("Signed in successfully!")
                handleRedirect()
              }}
              className="space-y-4"
            >
              {/* Email field */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 transition-colors duration-200" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 pl-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password field */}
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 pr-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Remember me and forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border border-white/20 bg-black/20 text-white focus:ring-white/20 focus:ring-2"
                  />
                  <span className="text-white/60 text-sm">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={onForgotPassword}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign in button */}
              <Button
                type="submit"
                className="w-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 text-white font-medium rounded-2xl h-14 mt-8 text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] mx-auto flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center my-8 relative z-10">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="px-4 text-white/40 text-sm font-medium">
            {activeTab === "signup" ? "OR SIGN IN WITH" : "OR CONTINUE WITH"}
          </span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Single Google button */}
        <button
          onClick={handleRedirect}
          className="w-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 flex items-center justify-center gap-3 hover:bg-black/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 relative z-10"
        >
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full"></div>
          </div>
          <span className="text-white/80 font-medium">Continue with Google</span>
        </button>

        <p className="text-center text-white/40 text-sm mt-8 relative z-10">
          {activeTab === "signup"
            ? "By creating an account, you agree to our Terms & Service"
            : "By signing in, you agree to our Terms & Service"}
        </p>

        <div className="text-center mt-6 pt-4 border-t border-white/10 relative z-10">
          <p className="text-white/30 text-xs">
            designed and developed with ❤️ by{" "}
            <button
              onClick={handleRedirect}
              className="text-white/50 hover:text-white/70 underline transition-colors duration-200"
            >
              Dollar Gill
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
