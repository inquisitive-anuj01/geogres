import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { products } from "../ProductsInfo/heroProducts";

const NewHero = () => {
  const navigate = useNavigate();
  const [activeProduct, setActiveProduct] = useState(products[0].id);
  const [selectedImage, setSelectedImage] = useState(products[0].mainImage);
  const [imageKey, setImageKey] = useState(0);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const currentProduct =
    products.find((p) => p.id === activeProduct) || products[0];

  const handleAccordionChange = (value) => {
    const newProduct = products.find((p) => p.id === value);
    if (newProduct) {
      setActiveProduct(value);
      setSelectedImage(newProduct.mainImage);
      setSelectedDescription("");
      setSelectedTitle("");
      setImageKey((prev) => prev + 1);
    }
  };

  const handleThumbnailClick = (thumb) => {
    setSelectedImage(thumb);
    setSelectedDescription(thumb.description);
    setSelectedTitle(thumb.title);
    setImageKey((prev) => prev + 1);
  };

  const handleRedirect = () => {
    if (selectedImage?.slug) {
      navigate(selectedImage.slug);
    }
  };

  return (
    <section className="min-h-screen bg-background overflow-hidden flex items-center">
      <div className="max-w-auto mx-auto px-6 md:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT SECTION */}
          <div className="flex flex-col space-y-6 justify-between ml-4 lg:ml-12">
            <div
              className="space-y-6 transition-opacity duration-700"
              key={activeProduct}
            >
              {/* ✅ Dynamic title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {selectedTitle || currentProduct.title}
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                {selectedDescription || currentProduct.description}
              </p>

              <Button
                onClick={handleRedirect}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg cursor-pointer"
              >
                VIEW PRODUCTS
              </Button>

              {/* Thumbnails */}
              <div className="flex flex-wrap gap-3 pt-4">
                {currentProduct.thumbnails.map((thumb, index) => (
                  <button
                    key={`${activeProduct}-${index}`}
                    onClick={() => handleThumbnailClick(thumb)}
                    className={`group relative w-20 h-20 md:w-24 md:h-24 border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImage.url === thumb.url
                        ? "border-accent shadow-lg scale-105"
                        : "border-border hover:border-accent/60 hover:scale-105"
                    }`}
                  >
                    <img
                      src={thumb.url}
                      alt={thumb.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-foreground"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background px-6 text-lg font-bold text-foreground">
                  Our Products
                </span>
              </div>
            </div>

            {/* Accordion */}
            <div className="flex gap-3 items-stretch h-44">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => handleAccordionChange(product.id)}
                  className={`relative rounded-xl overflow-hidden transition-all duration-700 ease-in-out border-2 cursor-pointer ${
                    activeProduct === product.id
                      ? "flex-[3] border-accent shadow-2xl shadow-accent/20"
                      : "flex-[0.5] border-border hover:border-accent/60 hover:shadow-lg"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {activeProduct === product.id ? (
                    <div className="w-full h-full p-6 bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center">
                      <img
                        src={product.mainImage.url}
                        alt={product.mainImage.alt}
                        className="w-full h-56 object-contain transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-background to-muted/10 hover:from-muted/20 hover:to-muted/30 transition-all duration-500 py-8 px-3">
                      <p
                        className="text-sm font-bold text-foreground tracking-wider whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                        }}
                      >
                        {product.title}
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center justify-center h-full">
            <img
              key={imageKey}
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto object-contain transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
