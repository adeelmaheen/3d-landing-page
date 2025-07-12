"use client"
import Navbar from "@/components/navbar"
import type React from "react"

import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Hero animation
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

    // Form animation
    if (formRef.current) {
      ScrollTrigger.create({
        trigger: formRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            formRef.current?.children || [],
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.1,
              ease: "power2.out",
            },
          )
        },
      })
    }

    // Contact info animation
    if (contactInfoRef.current) {
      ScrollTrigger.create({
        trigger: contactInfoRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            contactInfoRef.current?.children || [],
            { x: 50, opacity: 0, scale: 0.8 },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              stagger: 0.15,
              ease: "back.out(1.7)",
            },
          )
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      })

      // Show success message (you can implement toast notification here)
      console.log("Form submitted successfully!")
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
      scale: 1.02,
      y: -5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
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
              Contact Us
            </motion.h1>
            <motion.p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 px-4" variants={itemVariants}>
              Ready to transform your digital experience? Let's talk!
            </motion.p>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <MessageCircle className="w-6 h-6 mr-3 text-blue-400" />
                      Send us a message
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 transition-all duration-300"
                          placeholder="John"
                          required
                        />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 transition-all duration-300"
                          placeholder="Doe"
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 transition-all duration-300"
                        placeholder="john@example.com"
                        required
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 transition-all duration-300"
                        placeholder="How can we help you?"
                        required
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px] focus:border-blue-400 transition-all duration-300"
                        placeholder="Tell us about your project or question..."
                        required
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                        ) : (
                          <Send className="w-4 h-4 mr-2" />
                        )}
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <div ref={contactInfoRef} className="space-y-6 sm:space-y-8">
              {[
                {
                  Icon: Mail,
                  title: "Email Us",
                  details: ["hello@futurexp.com", "support@futurexp.com"],
                  color: "bg-blue-600/20",
                  iconColor: "text-blue-400",
                },
                {
                  Icon: Phone,
                  title: "Call Us",
                  details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
                  color: "bg-green-600/20",
                  iconColor: "text-green-400",
                },
                {
                  Icon: MapPin,
                  title: "Visit Us",
                  details: ["123 Innovation Street", "San Francisco, CA 94105"],
                  color: "bg-purple-600/20",
                  iconColor: "text-purple-400",
                },
                {
                  Icon: Clock,
                  title: "Business Hours",
                  details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: 10:00 AM - 4:00 PM"],
                  color: "bg-yellow-600/20",
                  iconColor: "text-yellow-400",
                },
              ].map(({ Icon, title, details, color, iconColor }, index) => (
                <motion.div
                  key={title}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className={`${color} p-3 rounded-lg`}
                          whileHover={{
                            scale: 1.1,
                            rotate: 360,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          <Icon className={`w-6 h-6 ${iconColor}`} />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{title}</h3>
                          {details.map((detail, idx) => (
                            <motion.p
                              key={idx}
                              className="text-gray-300 text-sm sm:text-base"
                              whileHover={{ x: 5, color: "#ffffff" }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {detail}
                            </motion.p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
