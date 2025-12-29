import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TileCleaner, BlockAdhesive, grout2k } from "../ProductsInfo/product";
import { Palette, Package, Eye } from "lucide-react";
import { optimizeCloudinary } from "../Extra/cloudianry.js";

const OtherProducts = () => {
  // Combine all other products
  const allOtherProducts = [...TileCleaner, ...BlockAdhesive, ...grout2k];

  return (
    <div className="min-h-screen bg-[#faebe3] mb-12 mt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center py-16 px-6"
      >
        <h1 className="text-5xl font-bold text-black mb-4 uppercase">
          Other <span className="text-[#74103e]">Products</span>
        </h1>
        <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
          Complementary products for your tiling projects. From cleaners to 
          specialized <br/> adhesives, we’ve got everything you need to achieve the
          perfect finish.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allOtherProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2,}}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-200"
            >
              <Link to={`/products/${product.slug}`} className="block">
                {/* Image */}
                <div className="relative h-56 flex items-center justify-center bg-[#ccb9ad] overflow-hidden">
                  <motion.img
                    src={optimizeCloudinary(product.image)}
                    alt={product.name}
                    className="h-full object-contain"
                    whileHover={{ scale: 1.05 }}
                    // transition={{ duration: 0.35 }}
                  />
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-black mb-3">
                    {product.heading || product.name}
                  </h3>
                  <p className="text-black text-sm mb-4 line-clamp-3">
                    {product.description || product.coverage}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6 font-semibold text-black">
                    {product.colours && (
                      <span className="flex items-center gap-1 bg-gray-100  text-md  px-3 py-1 rounded-full">
                        <Palette size={14} className="text-purple-500"/> {product.colours}
                      </span>
                    )}
                    {product.packaging && (
                      <span className="flex items-center gap-1 bg-gray-100  text-md px-3 py-1 rounded-full">
                        <Package size={14} className="text-[#74103e]" /> {product.packaging}
                      </span>
                    )}
                    {product.appearance && (
                      <span className="flex items-center gap-1 bg-gray-100  text-md px-3 py-1 rounded-full">
                        <Eye size={14} className="text-orange-600" /> {product.appearance}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 text-sm font-medium text-black border hover:border-[#74103e] hover:bg-[#74103e] hover:text-white rounded-full shadow-md hover:shadow-lg transition cursor-pointer"
                    >
                      View Details →
                    </motion.button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
