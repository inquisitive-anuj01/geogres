import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const slides = [
  {
    id: 0,
    title: "TILE & STONE ADHESIVE",
    subtitle: "Strong Bonding",
    description: "High-performance adhesive for reliable tile and stone installations.",
    image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757152171/1_wl10m2.png",
    slug: "tile-adhesive",
    bgColor: "bg-gradient-to-br from-amber-100 to-yellow-200",
  },
  {
    id: 1,
    title: "EPOXY & TILE GROUT",
    subtitle: "Seamless Finish",
    description: "Durable epoxy and tile grouts designed for long-lasting joints.",
    image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757326898/2_1_dlkmlk.png",
    slug: "epoxy-grout",
    bgColor: "bg-gradient-to-br from-sky-100 to-blue-200",
  },
  {
    id: 2,
    title: "BLOCK ADHESIVE",
    subtitle: "Heavy-Duty Strength",
    description: "Specialized adhesive for strong bonding of blocks and bricks.",
    image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1758277686/Block_Adhesive_40_Kg_Bag_yvampp.png",
    slug: "block-adhesive",
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-200",
  },
  // {
  //   id: 3,
  //   title: "2K GROUT",
  //   subtitle: "Premium Protection",
  //   description: "Two-component grout system for enhanced durability and water resistance.",
  //   image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1758268804/senzo_crot_maoryq.png",
  //   slug: "2k-grout",
  //   bgColor: "bg-gradient-to-br from-purple-100 to-indigo-200",
  // },
  // {
  //   id: 4,
  //   title: "TILE CLEANER",
  //   subtitle: "Sparkling Finish",
  //   description: "Powerful cleaner to restore tiles’ shine and remove tough stains.",
  //   image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146318/Tile_Cleaner_lqrt3k.png",
  //   slug: "tile-cleaner",
  //   bgColor: "bg-gradient-to-br from-pink-100 to-rose-200",
  // },
]

function MobileCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  const handlePrev = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  return (
    <div className="relative w-full min-h-screen bg-slate-900 flex items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-md">
        {/* Mobile Navigation Buttons */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>

        {/* Mobile Slides */}
        <div className="overflow-hidden px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full"
            >
              <div
                className={`${slides[currentIndex].bgColor} rounded-2xl shadow-xl p-6 flex flex-col items-center text-center`}
              >
                <h4 className="text-sm text-gray-700 font-medium mb-2">{slides[currentIndex].subtitle}</h4>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{slides[currentIndex].title}</h3>
                <p className="text-gray-700 text-sm mb-4">{slides[currentIndex].description}</p>

                <Link
                  to={`/category/${slides[currentIndex].slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition text-sm"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <img
                  src={slides[currentIndex].image || "/placeholder.svg"}
                  alt={slides[currentIndex].title}
                  className="w-full h-50 object-contain mt-4"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function DesktopCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  const handlePrev = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  //  FIX: Ensure circular position calculation so each slide gets center
  const getCardPosition = (index) => {
    const totalSlides = slides.length
    let diff = index - currentIndex
    if (diff > totalSlides / 2) diff -= totalSlides
    if (diff < -totalSlides / 2) diff += totalSlides
    return diff
  }

  return (
    <div className="relative w-full min-h-screen bg-slate-900 flex items-center justify-center px-4  rounded-t-[48px] mt-[-90px] pt-[40px] z-20 mb-10">
      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        {/* Prev Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="absolute -left-16 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="absolute -right-16 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "2000px" }}>
          <AnimatePresence mode="popLayout">
            {slides.map((slide, index) => {
              const position = getCardPosition(index)
              const isActive = position === 0
              const isVisible = Math.abs(position) <= 2 // allow 5 cards effect

              if (!isVisible) return null

              return (
                <motion.div
                  key={slide.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    x: position * 330,
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.5,
                    rotateY: position * -15,
                    zIndex: isActive ? 20 : 10 - Math.abs(position),
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-[350px]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className={`${slide.bgColor} rounded-2xl shadow-xl p-8 flex flex-col items-center text-center h-full`}
                  >
                    <h4 className="text-sm text-gray-700 font-medium mb-2">{slide.subtitle}</h4>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{slide.title}</h3>
                    <p className="text-gray-700 text-base mb-6">{slide.description}</p>

                    {isActive && (
                      <Link
                        to={`/category/${slide.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition"
                      >
                        Explore Products
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}

                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-52 object-contain mt-6"
                    />
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}


function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile ? <MobileCarousel /> : <DesktopCarousel />
}

export default HeroSection
