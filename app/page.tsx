"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

// Framer Motion variants for performance optimization
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
} as const

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
} as const

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    rotateY: 8,
    z: 50,
    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
} as const

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
} as const

export default function HeroLandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroTextRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isVideoError, setIsVideoError] = useState(false)
  const [currentStats, setCurrentStats] = useState({ users: 0, projects: 0, uptime: 99.9 })

  // Error handling for video
  const handleVideoLoad = useCallback(() => {
    setIsVideoLoaded(true)
    setIsVideoError(false)
  }, [])

  const handleVideoError = useCallback(() => {
    setIsVideoError(true)
    setIsVideoLoaded(false)
  }, [])

  // Memory efficient animation setup
  useEffect(() => {
    let tl: gsap.core.Timeline
    const scrollTriggers: ScrollTrigger[] = []

    const initAnimations = () => {
      try {
        // Main timeline
        tl = gsap.timeline()

        // Video fade in and scale animation with error handling
        if (videoRef.current && isVideoLoaded) {
          gsap.set(videoRef.current, { scale: 1.2, opacity: 0 })
          tl.to(videoRef.current, {
            scale: 1,
            opacity: 1,
            duration: 2.5,
            ease: "power2.out",
          })
        }

        // Hero text animations with stagger
        if (heroTextRef.current) {
          const heroElements = heroTextRef.current.children
          gsap.set(heroElements, { y: 100, opacity: 0, rotationX: 45 })
          tl.to(
            heroElements,
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              duration: 1.5,
              stagger: 0.3,
              ease: "back.out(1.7)",
            },
            "-=2",
          )
        }

        // Stats counter animation with ScrollTrigger
        if (statsRef.current) {
          const trigger = ScrollTrigger.create({
            trigger: statsRef.current,
            start: "top 80%",
            onEnter: () => {
              // Animate counters
              gsap.to(currentStats, {
                users: 500,
                projects: 10,
                duration: 2.5,
                ease: "power2.out",
                onUpdate: () => {
                  setCurrentStats({ ...currentStats })
                },
              })

              // Animate counter elements
              const counters = statsRef.current?.querySelectorAll(".stat-item")
              if (counters) {
                gsap.fromTo(
                  counters,
                  { y: 50, opacity: 0, scale: 0.8 },
                  {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                  },
                )
              }
            },
          })
          scrollTriggers.push(trigger)
        }

        // Pricing cards scroll animation
        if (pricingRef.current) {
          const cards = pricingRef.current.querySelectorAll(".pricing-card")
          const trigger = ScrollTrigger.create({
            trigger: pricingRef.current,
            start: "top 85%",
            onEnter: () => {
              gsap.fromTo(
                cards,
                {
                  y: 120,
                  opacity: 0,
                  scale: 0.7,
                  rotationY: 45,
                },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotationY: 0,
                  duration: 1.2,
                  stagger: 0.15,
                  ease: "back.out(1.4)",
                },
              )
            },
          })
          scrollTriggers.push(trigger)
        }

        // Continuous floating animations
        gsap.to(".floating-element", {
          y: -30,
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: {
            amount: 2,
            from: "random",
          },
        })

        // Parallax effect for background elements
        gsap.to(".parallax-slow", {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      } catch (error) {
        console.error("Animation initialization error:", error)
      }
    }

    if (isVideoLoaded || isVideoError) {
      initAnimations()
    }

    // Cleanup function for memory efficiency
    return () => {
      if (tl) tl.kill()
      scrollTriggers.forEach((trigger) => trigger.kill())
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isVideoLoaded, isVideoError])

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="floating-element parallax-slow absolute top-10 left-[5%] w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="floating-element parallax-slow absolute top-1/4 right-[10%] w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.7, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="floating-element parallax-slow absolute bottom-1/3 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full blur-xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 360, 720],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="floating-element parallax-slow absolute top-1/2 right-1/4 w-14 h-14 sm:w-28 sm:h-28 bg-gradient-to-r from-yellow-600/20 to-red-600/20 rounded-full blur-xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Responsive Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          {!isVideoError && (
            <motion.video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{
                minHeight: "100vh",
                minWidth: "100vw",
              }}
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: isVideoLoaded ? 1 : 0 }}
              transition={{ duration: 2 }}
            >
              <source src="/model.mp4" type="video/mp4" />
            </motion.video>
          )}
        </AnimatePresence>

        {/* Fallback background if video fails */}
        {isVideoError && (
          <motion.div
            className="w-full h-full bg-gradient-to-br from-gray-900 via-purple-900 to-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        )}

        {/* Enhanced overlay with gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <Navbar />

      {/* Enhanced Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={heroTextRef}
          className="text-center max-w-7xl mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent leading-tight mt-40"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 30px rgba(255,255,255,0.5)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            Future
            <br />
            Experience
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto px-4"
            variants={itemVariants}
          >
            Step into the next dimension of digital innovation
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            variants={itemVariants}
          >
            <Link href="/get-started">
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg"
                >
                  Get Started →
                </Button>
              </motion.div>
            </Link>
            <Link href="/watch-demo">
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent backdrop-blur-sm rounded-xl"
                >
                  ▶ Watch Demo
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="relative z-10 py-16 sm:py-20 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stat-item p-4 rounded-lg">
              <h3 className="text-4xl sm:text-5xl font-bold text-white">
                {Math.floor(currentStats.users)}+
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mt-2">Happy Users</p>
            </div>
            <div className="stat-item p-4 rounded-lg">
              <h3 className="text-4xl sm:text-5xl font-bold text-white">
                {Math.floor(currentStats.projects)}+
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mt-2">Projects Created</p>
            </div>
            <div className="stat-item p-4 rounded-lg">
              <h3 className="text-4xl sm:text-5xl font-bold text-white">
                {currentStats.uptime.toFixed(1)}%
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mt-2">Uptime</p>
            </div>
          </div>
        </div>
      </div>


      {/* Pricing Section */}
      <div id="pricing" ref={pricingRef} className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Start for free and upgrade as you grow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <Card className="pricing-card bg-white/10 backdrop-blur-sm border-white/20 text-white relative transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Free</CardTitle>
                <CardDescription className="text-gray-300">Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-300">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Basic 3D experiences
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>5 projects per month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Community support
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-3">✗</span>
                    Advanced features
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-3">✗</span>
                    Priority support
                  </li>
                </ul>
                <Link href="/get-started">
                  <Button className="w-full mt-6 bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all duration-300">
                    Get Started Free
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Monthly Plan */}
            <Card className="pricing-card bg-white/10 backdrop-blur-sm border-white/20 text-white relative transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Pro Monthly</CardTitle>
                <CardDescription className="text-gray-300">For professionals and teams</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$20</span>
                  <span className="text-gray-300">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Everything in Free
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Unlimited projects
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Advanced 3D features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Custom integrations
                  </li>
                </ul>
                <Link href="/get-started">
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300">
                    Start Pro Monthly
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Yearly Plan */}
            <Card className="pricing-card bg-white/10 backdrop-blur-sm border-white/20 text-white relative transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                Save 40%
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Pro Yearly</CardTitle>
                <CardDescription className="text-gray-300">Best value for committed users</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$144</span>
                  <span className="text-gray-300">/year</span>
                  <div className="text-sm text-green-400 mt-1">Save $96 per year</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Everything in Pro Monthly
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    40% discount
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Early access to features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Custom training sessions
                  </li>
                </ul>
                <Link href="/get-started">
                  <Button className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transition-all duration-300">
                    Start Pro Yearly
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
