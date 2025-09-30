import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const waterproofing = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757152171/1_wl10m2.png"
const sealants = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757152036/2_e5ltbb.png"
const coatings = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757152043/3_wdfmda.png"

const slides = [
  {
    id: 0,
    title: "TILE ADHESIVES",
    subtitle: "Advanced Protection",
    description: "Premium tile adhesives for strong, durable, and waterproof tile installations",
    image: waterproofing,
    slug: "tile-adhesive",
    bgColor: "bg-gradient-to-br from-amber-100 to-yellow-200", // warm pastel
  },
  {
    id: 1,
    title: "EPOXY GROUTS",
    subtitle: "Superior Bonding",
    description: "Premium epoxy grouts for long-lasting tile installations",
    image: sealants,
    slug: "epoxy-grout",
    bgColor: "bg-gradient-to-br from-sky-100 to-blue-200", // cool pastel
  },
  {
    id: 2,
    title: "OTHER PRODUCTS",
    subtitle: "Durable Solutions",
    description: "Professional-grade products for sealing, waterproofing, and coating applications",
    image: coatings,
    slug: "other-products",
    bgColor: "bg-gradient-to-br from-pink-100 to-rose-200", // soft pink gradient
  },
]


function HeroSection() {
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

  const getCardPosition = (index) => {
    const diff = index - currentIndex
    const totalSlides = slides.length
    let position = diff
    if (diff > totalSlides / 2) position = diff - totalSlides
    if (diff < -totalSlides / 2) position = diff + totalSlides
    return position
  }

  return (
    <div className="relative w-full min-h-screen bg-slate-900 flex items-center justify-center px-4">
     
      <div className="relative w-full max-w-6xl h-[400px] flex items-center justify-center perspective-[2000px]">

        {/* Prev Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        <AnimatePresence mode="popLayout">
          {slides.map((slide, index) => {
            const position = getCardPosition(index)
            const isActive = position === 0
            const isVisible = Math.abs(position) <= 1

            if (!isVisible) return null

            return (
              <motion.div
                key={slide.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  x: position * 320,
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.5,
                  rotateY: position * -15,
                  zIndex: isActive ? 20 : 10 - Math.abs(position),
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-[90%] sm:w-[70%] md:w-[50%] max-w-md"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`${slide.bgColor} rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-center text-center h-full`}
                >
                  <h4 className="text-sm text-gray-700 font-medium mb-2">{slide.subtitle}</h4>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{slide.title}</h3>
                  <p className="text-gray-700 text-base md:text-lg mb-6">{slide.description}</p>

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
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-40 md:h-56 object-contain mt-6"
                  />
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default HeroSection
