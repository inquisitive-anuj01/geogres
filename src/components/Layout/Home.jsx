import React from 'react'
// import Sample from '../Extra/Sample'
import HeroSection from '../Pages/HeroSection'
import ColorVisuals from '../Pages/ColorVisuals'
import UsefulTools from '../Pages/UsefullTools'
import ProductInfo from '../Pages/ProductInfo'
import Certification from '../Pages/Certification'
import Pointers from '../Pages/Pointers'
import Review from '../Pages/Review'
import Hero from '../Pages/Hero'

function Home() {
  return (
    <div className='bg-[#CFCFCF]'>
      <Hero/>
      <Certification/>
      <ProductInfo/>
      {/* <HeroSection /> */}
      <ColorVisuals/>
      <UsefulTools/>
      <Pointers/>
      <Review/>
    </div>
  )
}

export default Home