"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    if (socialRef.current) {
      const socialIcons = socialRef.current.children
      gsap.fromTo(
        socialIcons,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 90%",
          },
        },
      )
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

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  const linkVariants = {
    hover: {
      x: 5,
      color: "#ffffff",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <motion.footer
      ref={footerRef}
      className="relative z-10 bg-black/60 backdrop-blur-xl border-t border-white/20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <motion.div className="space-y-4 sm:col-span-2 lg:col-span-1" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block"
              >
                DevEase
              </Link>
            </motion.div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Step into the next dimension of digital innovation with cutting-edge 3D experiences.
            </p>
            <motion.div ref={socialRef} className="flex space-x-3 sm:space-x-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/maheen.arif.750/", color: "hover:text-blue-400" },
                { Icon: Twitter, href: "https://x.com/MaheenA77811?s=03", color: "hover:text-blue-400" },
                { Icon: Instagram, href: "https://www.instagram.com/maheenarif225?utm_source=qr&igsh=MXMybnRpZDBoejcybg==", color: "hover:text-pink-400" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/maheen-arif-a929412b6/", color: "hover:text-blue-600" },
                { Icon: Github, href: "https://github.com/adeelmaheen", color: "hover:text-gray-400" },
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`text-white/60 ${color} transition-all duration-300 p-2 rounded-lg hover:bg-white/10`}
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-white font-semibold text-base sm:text-lg">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/pricing", label: "Pricing" },
                { href: "/watch-demo", label: "Watch Demo" },
                { href: "/get-started", label: "Get Started" },
              ].map((link) => (
                <motion.div key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-white font-semibold text-base sm:text-lg">Support</h3>
            <div className="space-y-2">
              {[
                { href: "/contact", label: "Contact Us" },
                { href: "#", label: "Help Center" },
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms of Service" },
                { href: "#", label: "FAQ" },
              ].map((link) => (
                <motion.div key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-white font-semibold text-base sm:text-lg">Contact Info</h3>
            <div className="space-y-3">
              {[
                { Icon: Mail, text: "maheenadeel3@gmail.com", color: "text-blue-400" },
                { Icon: Phone, text: "(+92) 0311211-3387", color: "text-blue-400" },
                { Icon: MapPin, text: "Karachi, Pakistan ", color: "text-blue-400" },
              ].map(({ Icon, text, color }, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon size={16} className={color} />
                  <span className="text-sm sm:text-base">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          variants={itemVariants}
        >
          <motion.p
            className="text-gray-400 text-sm sm:text-base text-center sm:text-left flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            © 2024 FutureXP. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="mx-1"
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.span>
            All rights reserved.
          </motion.p>
          <div className="flex space-x-4 sm:space-x-6">
            {[
              { href: "#", label: "Privacy" },
              { href: "#", label: "Terms" },
              { href: "#", label: "Cookies" },
            ].map((link) => (
              <motion.div key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition-all duration-300"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
