import React from "react";
import DomeGallery from "../../../ReactBits/DomeGallery/DomeGallery";
import { heroProducts } from "../ProductsInfo/heroProducts.js";
import { optimizeCloudinary } from "../Extra/cloudianry.js";

function Hero() {
  const galleryImages = heroProducts.map(product => ({
    src: (optimizeCloudinary(product.image)),
    alt: product.name,
    link: product.link
  }));

  return (
    <section className="hero-section w-full h-screen relative overflow-hidden bg-white">
      {/* Full-screen Dome Gallery */}
      <div className="absolute inset-0 w-full h-full">
        <DomeGallery 
          images={galleryImages}
          fit={0.85}
          minRadius={1100}
          maxVerticalRotationDeg={15}
          segments={28}
          dragDampening={0.6}
          grayscale={false}
          imageBorderRadius="30px"
          openedImageBorderRadius="30px"
          dragSensitivity={25}
          autoRotate={true} 
          autoRotateSpeed={0.05}
          
        />
      </div>
    </section>
  );
}

export default Hero;