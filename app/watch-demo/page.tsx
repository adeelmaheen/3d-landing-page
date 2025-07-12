"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Volume2, Maximize } from "lucide-react"
import { useState, useRef } from "react"

export default function WatchDemoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <Navbar />

      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent">
              Watch Demo
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              See FutureXP in action and discover what's possible
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6">
          {/* Main Video Player */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-12">
            <CardContent className="p-0">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg?height=600&width=1200"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/videos/model.mp4" type="video/mp4" />
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={togglePlay}
                      size="lg"
                      className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </Button>
                    <Button
                      size="lg"
                      className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
                    >
                      <Volume2 size={24} />
                    </Button>
                    <Button
                      size="lg"
                      className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
                    >
                      <Maximize size={24} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Play className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interactive 3D Models</h3>
                <p className="text-gray-300 text-sm">
                  Explore fully interactive 3D models with realistic lighting and materials
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Volume2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Immersive Audio</h3>
                <p className="text-gray-300 text-sm">Spatial audio that responds to your interactions and movements</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Maximize className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Full Screen Experience</h3>
                <p className="text-gray-300 text-sm">Immerse yourself completely with full-screen 3D environments</p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Own?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already building the future of digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Start Building Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent transition-all duration-300 hover:scale-105"
              >
                View More Demos
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
