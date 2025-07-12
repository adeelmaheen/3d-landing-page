"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, Zap, Shield, Rocket } from "lucide-react"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <Navbar />

      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent">
              Get Started
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Begin your journey into the future of 3D experiences
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sign Up Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Create Your Account</CardTitle>
                <p className="text-gray-300">Start with our free tier - no credit card required</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <Input
                    type="password"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Create a strong password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your company name"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-300">
                    I agree to the{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                      Privacy Policy
                    </a>
                  </span>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105">
                  Create Account
                </Button>

                <div className="text-center">
                  <span className="text-gray-300">Already have an account? </span>
                  <a href="#" className="text-blue-400 hover:underline">
                    Sign in
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose FutureXP?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Free to Start</h3>
                      <p className="text-gray-300 text-sm">
                        Begin with our generous free tier and upgrade when you're ready
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Zap className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Lightning Fast</h3>
                      <p className="text-gray-300 text-sm">
                        Optimized for performance with global CDN and edge computing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Enterprise Security</h3>
                      <p className="text-gray-300 text-sm">
                        Bank-level security with SOC 2 compliance and data encryption
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Rocket className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Easy Integration</h3>
                      <p className="text-gray-300 text-sm">
                        Simple APIs and SDKs for seamless integration with your existing tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Join Thousands of Creators</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">500K+</div>
                      <div className="text-sm text-gray-300">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">10M+</div>
                      <div className="text-sm text-gray-300">Projects Created</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">99.9%</div>
                      <div className="text-sm text-gray-300">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">24/7</div>
                      <div className="text-sm text-gray-300">Support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
