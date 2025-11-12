import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { products } from "../ProductsInfo/heroProducts"
import FloatingBubbles from "../Extra/FloatingBubbles"

const NewHero = () => {
  const navigate = useNavigate()
  const [activeProduct, setActiveProduct] = useState(products[0].id)
  const [selectedImage, setSelectedImage] = useState(products[0].mainImage)
  const [imageKey, setImageKey] = useState(0)
  const [selectedDescription, setSelectedDescription] = useState("")
  const [selectedTitle, setSelectedTitle] = useState("")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentProduct = products.find((p) => p.id === activeProduct) || products[0]

  const handleAccordionChange = (value) => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const newProduct = products.find((p) => p.id === value)
    if (newProduct) {
      setActiveProduct(value)
      setSelectedImage(newProduct.mainImage)
      setSelectedDescription("")
      setSelectedTitle("")
      setImageKey((prev) => prev + 1)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 600)
    }
  }

  const handleThumbnailClick = (thumb) => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setSelectedImage(thumb)
    setSelectedDescription(thumb.description)
    setSelectedTitle(thumb.title)
    setImageKey((prev) => prev + 1)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const handleRedirect = () => {
    if (selectedImage?.slug) {
      navigate(selectedImage.slug)
    }
  }

  return (
    <section className="min-h-screen bg-[#faebe3] overflow-hidden flex items-center mt-12 lg:mt-10">
      <div className="hidden lg:block">
        {/* <FloatingBubbles /> */}
      </div>
      <div className="max-w-auto mx-auto px-6 md:px-10 w-full">
        {/* MOBILE LAYOUT - Stacked vertically */}
        <div className="flex flex-col lg:hidden">
          {/* MAIN IMAGE - Top for mobile with negative margin */}
          <div className="flex justify-center mb-3 -mt-6 ">
            <div className="relative w-full max-w-xs right-[-35px]">
              <img
                key={imageKey}
                src={selectedImage.url || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full h-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform"
                style={{
                  transform: isTransitioning ? "scale(0.95)" : "scale(1)",
                  opacity: isTransitioning ? 0.8 : 1,
                }}
              />
            </div>
          </div>

          {/* THUMBNAILS - Below main image for mobile with increased size */}
          <div className="flex justify-center gap-2 mb-4 px-4">
            <div className="flex gap-3 justify-start overflow-x-auto w-full max-w-xs py-2 scrollbar-hide">
              {currentProduct.thumbnails.map((thumb, index) => (
                <button
                  key={`${activeProduct}-${index}`}
                  onClick={() => handleThumbnailClick(thumb)}
                  className={`group relative w-16 h-16 border-2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                    selectedImage.url === thumb.url
                      ? "shadow-md scale-105 border-[#74003c] border-2 rounded-lg"
                      : "border-border hover:border-[#74003c]/30  hover:scale-105"
                  } ${isTransitioning ? "pointer-events-none" : ""}`}
                >
                  <img
                    src={thumb.url || "/placeholder.svg"}
                    alt={thumb.alt}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT SECTION - Below thumbnails for mobile */}
          <div className="flex flex-col space-y-3 mb-4 text-center">
            <h1 className="text-2xl font-semibold text-foreground leading-tight transition-all duration-500 ease-in-out">
              {selectedTitle || currentProduct.title}
            </h1>

            <p className="text-sm text-muted-foreground transition-all duration-500 ease-in-out px-2">
              {selectedDescription || currentProduct.description}
            </p>

            <Button
              onClick={handleRedirect}
              className="bg-[#74103e] text-primary-foreground font-semibold px-6 py-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 mx-auto text-sm"
            >
              VIEW PRODUCTS
            </Button>
          </div>

          {/* ACCORDION - Bottom for mobile with increased height */}
          <div className="flex gap-1 items-stretch h-36 w-full max-w-xs mx-auto">
            {products.map((product, index) => (
              <motion.button
                key={product.id}
                onClick={() => handleAccordionChange(product.id)}
                className={`relative rounded-lg overflow-hidden border-2 cursor-pointer flex-1 transition-colors duration-300 ${
                  activeProduct === product.id
                    ? "border-accent shadow-md shadow-accent/20"
                    : "border-border hover:border-accent/60 hover:shadow-lg"
                }`}
                initial={{ flex: 0.5 }}
                animate={{
                  flex: activeProduct === product.id ? 2.5 : 0.5,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                {activeProduct === product.id ? (
                  <motion.div
                    className="w-full h-full p-2 bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-end border-[#74003c] border-1 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <motion.img
                      src={product.mainImage.url}
                      alt={product.mainImage.alt}
                      className="h-full object-contain -mr-1"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    className="w-full h-full flex items-center justify-center bg-gradient-to-b from-background to-muted/10 hover:from-muted/20 hover:to-muted/30 transition-all duration-500 ease-out py-4 px-1"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.p
                      className="text-xs font-bold text-foreground tracking-wider whitespace-nowrap"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                      }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: activeProduct === product.id ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {product.title}
                    </motion.p>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* DESKTOP LAYOUT - Original layout preserved */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT SECTION */}
          <div className="flex flex-col space-y-6 justify-between ml-4 lg:ml-12">
            <div className="space-y-6 transition-opacity duration-500 ease-in-out" key={activeProduct}>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight transition-all duration-500 ease-in-out">
                {selectedTitle || currentProduct.title}
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl transition-all duration-500 ease-in-out">
                {selectedDescription || currentProduct.description}
              </p>

              <Button
                onClick={handleRedirect}
                className="bg-[#74103e] text-primary-foreground font-semibold px-8 py-3 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                VIEW PRODUCTS
              </Button>

              <div className="flex gap-2 items-stretch h-44 w-full max-w-sm">
                {products.map((product, index) => (
                  <motion.button
                    key={product.id}
                    onClick={() => handleAccordionChange(product.id)}
                    className={`relative rounded-xl overflow-hidden border-2 cursor-pointer flex-1 transition-colors duration-300 ${
                      activeProduct === product.id
                        ? "border-accent shadow-2xl shadow-accent/20"
                        : "border-border hover:border-accent/60 hover:shadow-lg"
                    }`}
                    initial={{ flex: 0.5 }}
                    animate={{
                      flex: activeProduct === product.id ? 2.5 : 0.5,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    {activeProduct === product.id ? (
                      <motion.div
                        className="w-full h-full p-4 bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-end border-[#74003c] border-1 rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <motion.img
                          src={product.mainImage.url}
                          alt={product.mainImage.alt}
                          className="h-full object-contain -mr-2"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          whileHover={{ scale: 1.05 }}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        className="w-full h-full flex items-center justify-center bg-gradient-to-b from-background to-muted/10 hover:from-muted/20 hover:to-muted/30 transition-all duration-500 ease-out py-6 px-2"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.p
                          className="text-sm font-bold text-foreground tracking-wider whitespace-nowrap"
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed",
                          }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: activeProduct === product.id ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {product.title}
                        </motion.p>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Thumbnails - Only for desktop */}
              <div className="flex flex-wrap gap-3 pt-4">
                {currentProduct.thumbnails.map((thumb, index) => (
                  <button
                    key={`${activeProduct}-${index}`}
                    onClick={() => handleThumbnailClick(thumb)}
                    className={`group relative w-20 h-20 md:w-24 md:h-24 border-1 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                      selectedImage.url === thumb.url
                        ? "shadow-lg scale-105 border-[#74003c] border-1 rounded-xl"
                        : "border-border hover:border-accent/60 hover:scale-105"
                    } ${isTransitioning ? "pointer-events-none" : ""}`}
                  >
                    <img
                      src={thumb.url || "/placeholder.svg"}
                      alt={thumb.alt}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Modified to stick to right border */}
          <div className="flex items-center justify-end h-full -mr-4 md:-mr-10">
            <div className="relative">
              <img
                key={imageKey}
                src={selectedImage.url || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="max-w-full h-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform"
                style={{
                  transform: isTransitioning ? "scale(0.95) translateX(10px)" : "scale(1) translateX(0)",
                  opacity: isTransitioning ? 0.8 : 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewHero