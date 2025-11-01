import React from "react";
import DomeGallery from "../../../ReactBits/DomeGallery/DomeGallery";
import { heroProducts } from "../ProductsInfo/heroProducts.js";

function Hero() {
  const galleryImages = heroProducts.map(product => ({
    src: product.image,
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
          minRadius={900}
          maxVerticalRotationDeg={0}
          segments={26}
          dragDampening={0.6}
          grayscale={false}
          imageBorderRadius="30px"
          openedImageBorderRadius="30px"
          dragSensitivity={25}
          autoRotate={true} 
          autoRotateSpeed={0.1}
          
        />
      </div>
    </section>
  );
}

export default Hero;