"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, Zap, Shield, Crown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = {
    monthly: [
      {
        name: "Free",
        price: "$0",
        period: "/month",
        description: "Perfect for getting started",
        icon: Star,
        color: "from-gray-600 to-gray-800",
        features: [
          { name: "5 projects per month", included: true },
          { name: "Basic 3D models", included: true },
          { name: "Community support", included: true },
          { name: "Advanced features", included: false },
          { name: "Priority support", included: false },
        ],
        cta: "Get Started Free",
        href: "/signup",
        popular: false,
        originalPrice: undefined,
      },
      {
        name: "Starter",
        price: "$9",
        period: "/month",
        description: "For individual creators",
        icon: Zap,
        color: "from-blue-600 to-blue-800",
        features: [
          { name: "25 projects per month", included: true },
          { name: "Advanced 3D models", included: true },
          { name: "Email support", included: true },
          { name: "Basic analytics", included: true },
          { name: "Team collaboration", included: false },
        ],
        cta: "Choose Starter",
        href: "/signup",
        popular: false,
        originalPrice: undefined,
      },
      {
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "For professionals and teams",
        icon: Shield,
        color: "from-purple-600 to-blue-600",
        features: [
          { name: "Unlimited projects", included: true },
          { name: "Premium 3D models", included: true },
          { name: "Priority support", included: true },
          { name: "Advanced analytics", included: true },
          { name: "Team collaboration", included: true },
        ],
        cta: "Choose Pro",
        href: "/signup",
        popular: true,
        originalPrice: undefined,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "/month",
        description: "For large organizations",
        icon: Crown,
        color: "from-yellow-600 to-orange-600",
        features: [
          { name: "Everything in Pro", included: true },
          { name: "Custom integrations", included: true },
          { name: "Dedicated support", included: true },
          { name: "SLA guarantee", included: true },
          { name: "On-premise deployment", included: true },
        ],
        cta: "Contact Sales",
        href: "/contact",
        popular: false,
        originalPrice: undefined,
      },
    ],
    yearly: [
      {
        name: "Free",
        price: "$0",
        period: "/month",
        description: "Perfect for getting started",
        icon: Star,
        color: "from-gray-600 to-gray-800",
        features: [
          { name: "5 projects per month", included: true },
          { name: "Basic 3D models", included: true },
          { name: "Community support", included: true },
          { name: "Advanced features", included: false },
          { name: "Priority support", included: false },
        ],
        cta: "Get Started Free",
        href: "/signup",
        popular: false,
        originalPrice: undefined,
      },
      {
        name: "Starter",
        price: "$5",
        period: "/month",
        originalPrice: "$9",
        description: "For individual creators",
        icon: Zap,
        color: "from-blue-600 to-blue-800",
        features: [
          { name: "25 projects per month", included: true },
          { name: "Advanced 3D models", included: true },
          { name: "Email support", included: true },
          { name: "Basic analytics", included: true },
          { name: "Team collaboration", included: false },
        ],
        cta: "Choose Starter",
        href: "/signup",
        popular: false,
      },
      {
        name: "Pro",
        price: "$17",
        period: "/month",
        originalPrice: "$29",
        description: "For professionals and teams",
        icon: Shield,
        color: "from-purple-600 to-blue-600",
        features: [
          { name: "Unlimited projects", included: true },
          { name: "Premium 3D models", included: true },
          { name: "Priority support", included: true },
          { name: "Advanced analytics", included: true },
          { name: "Team collaboration", included: true },
        ],
        cta: "Choose Pro",
        href: "/signup",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "/month",
        description: "For large organizations",
        icon: Crown,
        color: "from-yellow-600 to-orange-600",
        features: [
          { name: "Everything in Pro", included: true },
          { name: "Custom integrations", included: true },
          { name: "Dedicated support", included: true },
          { name: "SLA guarantee", included: true },
          { name: "On-premise deployment", included: true },
        ],
        cta: "Contact Sales",
        href: "/contact",
        popular: false,
      },
    ],
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Water Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop className="w-full h-full object-cover opacity-30">
          <source src="/water.mp4" type="video/mp4" />
          <source src="/water.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <Navbar />

      <div className="relative z-10 pt-20 pb-12">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent">
              Choose Your Plan
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Unlock the full potential of 3D experiences with our flexible pricing
            </p>

            {/* Billing Toggle - Liquid Glass Style */}
            <div className="flex items-center justify-center mb-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1 shadow-lg">
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      billingCycle === "monthly"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      billingCycle === "yearly"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span>Yearly</span>
                    <Badge className="bg-green-600 text-white text-xs">Save 40%</Badge>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards - Liquid Glass Tabs */}
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {plans[billingCycle].map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <Card
                  key={plan.name}
                  className={`bg-white/10 backdrop-blur-md border-white/20 text-white relative transition-all duration-500 hover:scale-105 hover:bg-white/15 shadow-xl ${
                    plan.popular ? "ring-2 ring-purple-500/50 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <div className="flex flex-col">
                          <span className="text-gray-300 text-sm">{plan.period}</span>
                          {plan.originalPrice && (
                            <span className="text-gray-500 text-xs line-through">{plan.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          {feature.included ? (
                            <Check className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                          ) : (
                            <X className="text-gray-500 mr-3 w-5 h-5 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${feature.included ? "text-white" : "text-gray-400"}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href={plan.href}>
                      <Button
                        className={`w-full mt-6 transition-all duration-300 hover:scale-105 ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
                            : plan.name === "Free"
                              ? "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                              : `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white shadow-lg`
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white transition-all duration-300 hover:bg-white/15 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2">Can I change plans anytime?</h4>
                  <p className="text-gray-300 text-sm">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white transition-all duration-300 hover:bg-white/15 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2">Is there a free trial?</h4>
                  <p className="text-gray-300 text-sm">
                    Our free tier gives you access to basic features forever. No credit card required.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white transition-all duration-300 hover:bg-white/15 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2">What payment methods do you accept?</h4>
                  <p className="text-gray-300 text-sm">
                    We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white transition-all duration-300 hover:bg-white/15 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2">Do you offer refunds?</h4>
                  <p className="text-gray-300 text-sm">
                    Yes, we offer a 30-day money-back guarantee for all paid plans.
                  </p>
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
