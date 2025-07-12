"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Zap, Award, Rocket, Shield, Globe, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        },
      )
    }

    // Stats animation
    if (statsRef.current) {
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            statsRef.current?.children || [],
            { scale: 0, rotation: 180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "back.out(1.7)",
            },
          )
        },
      })
    }

    // Values cards animation
    if (valuesRef.current) {
      ScrollTrigger.create({
        trigger: valuesRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            valuesRef.current?.children || [],
            { y: 80, opacity: 0, rotationY: 45 },
            {
              y: 0,
              opacity: 1,
              rotationY: 0,
              duration: 1,
              stagger: 0.15,
              ease: "power2.out",
            },
          )
        },
      })
    }

    // Team cards animation
    if (teamRef.current) {
      ScrollTrigger.create({
        trigger: teamRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            teamRef.current?.children || [],
            { y: 100, opacity: 0, scale: 0.8 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              stagger: 0.2,
              ease: "elastic.out(1, 0.8)",
            },
          )
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <Navbar />

      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 30px rgba(255,255,255,0.5)",
              }}
            >
              About FutureXP
            </motion.h1>
            <motion.p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 px-4" variants={itemVariants}>
              We're pioneering the future of digital experiences through cutting-edge 3D technology
            </motion.p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                At FutureXP, we believe that the future of digital interaction lies in immersive 3D experiences. Our
                mission is to democratize access to cutting-edge 3D technology, making it accessible to creators,
                businesses, and innovators worldwide.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                We're not just building tools; we're crafting the foundation for the next generation of digital
                experiences that will transform how people interact with technology.
              </p>
            </motion.div>
            <motion.div
              ref={statsRef}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">10M+</div>
                  <div className="text-gray-300 text-sm sm:text-base">3D Experiences Created</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">500K+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Active Users</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm sm:text-base">Uptime</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                Icon: Users,
                title: "Community First",
                description: "We build for our community, listening to feedback and evolving together.",
                color: "text-blue-400",
              },
              {
                Icon: Target,
                title: "Innovation",
                description: "Pushing boundaries and exploring new possibilities in 3D technology.",
                color: "text-purple-400",
              },
              {
                Icon: Zap,
                title: "Performance",
                description: "Delivering lightning-fast, reliable experiences that users can depend on.",
                color: "text-yellow-400",
              },
              {
                Icon: Award,
                title: "Excellence",
                description: "Committed to the highest standards in everything we create and deliver.",
                color: "text-green-400",
              },
            ].map(({ Icon, title, description, color }, index) => (
              <motion.div key={title} variants={cardHoverVariants} whileHover="hover">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 1,
                      }}
                    >
                      <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${color} mx-auto mb-4`} />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">{title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                description: "Visionary leader with 15+ years in 3D technology and digital innovation.",
                initials: "JD",
                gradient: "from-blue-400 to-purple-600",
                roleColor: "text-blue-400",
              },
              {
                name: "Jane Smith",
                role: "CTO",
                description: "Technical genius behind our cutting-edge 3D rendering and optimization systems.",
                initials: "JS",
                gradient: "from-purple-400 to-pink-600",
                roleColor: "text-purple-400",
              },
              {
                name: "Mike Johnson",
                role: "Head of Design",
                description: "Creative mastermind crafting beautiful and intuitive user experiences.",
                initials: "MJ",
                gradient: "from-green-400 to-blue-600",
                roleColor: "text-green-400",
              },
            ].map((member, index) => (
              <motion.div key={member.name} variants={cardHoverVariants} whileHover="hover">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <motion.div
                      className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-xl sm:text-2xl font-bold`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {member.initials}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{member.name}</h3>
                    <p className={`${member.roleColor} mb-3 font-medium`}>{member.role}</p>
                    <p className="text-gray-300 text-sm sm:text-base">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Features Section */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                Icon: Rocket,
                title: "Fast Performance",
                description: "Lightning-fast 3D rendering with optimized performance.",
                color: "text-red-400",
              },
              {
                Icon: Shield,
                title: "Secure Platform",
                description: "Enterprise-grade security with data protection.",
                color: "text-blue-400",
              },
              {
                Icon: Globe,
                title: "Global Reach",
                description: "Worldwide CDN for optimal performance everywhere.",
                color: "text-green-400",
              },
              {
                Icon: Star,
                title: "Premium Support",
                description: "24/7 dedicated support from our expert team.",
                color: "text-yellow-400",
              },
            ].map(({ Icon, title, description, color }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    >
                      <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${color} mx-auto mb-4`} />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">{title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
