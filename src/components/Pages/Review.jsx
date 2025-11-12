import React from "react";

function Review() {
  const reviews = [
    {
      name: "Rajesh Kumar",
      designation: "Builder",
      rating: 5,
      review:
        "GeoGres tiles are exceptional! The quality is outstanding and the adhesive holds perfectly even in high moisture areas. Been using them for 3 years now and highly recommend to all builders.",
    },
    {
      name: "Priya Sharma",
      designation: "Customer",
      rating: 5,
      review:
        "Renovated my entire house with GeoGres tiles. The variety of designs is amazing and the adhesive quality is top-notch. No issues even after 2 years of installation.",
    },
    {
      name: "Mohammed Ali",
      designation: "Tile Worker",
      rating: 4.5,
      review:
        "As a professional tile installer, I can say GeoGres products make my job easier. The adhesive spreads evenly and the tiles are perfectly sized. Great working experience.",
    },
    {
      name: "Sunita Patel",
      designation: "Homeowner",
      rating: 5,
      review:
        "Beautiful tiles with excellent durability! Used GeoGres for my kitchen and bathroom renovation. The adhesive is strong and the tiles still look brand new after heavy usage.",
    },
    {
      name: "Vikram Singh",
      designation: "Contractor",
      rating: 4,
      review:
        "Reliable products with consistent quality. Have completed multiple projects using GeoGres tiles and adhesive. Clients are always satisfied with the final results.",
    },
    {
      name: "Anita Desai",
      designation: "Interior Designer",
      rating: 5,
      review:
        "GeoGres offers the perfect combination of aesthetics and functionality. The tile designs are modern and the adhesive ensures long-lasting installation. My go-to choice for all projects.",
    },
    {
      name: "Ramesh Gupta",
      designation: "Builder",
      rating: 4.5,
      review:
        "Excellent adhesive strength and tile quality. Have used GeoGres products in over 50 residential projects. Never faced any complaints from customers. Highly recommended!",
    },
    {
      name: "Kavita Joshi",
      designation: "Customer",
      rating: 4,
      review:
        "Good value for money! The tiles are beautiful and the adhesive is reliable. Installation was smooth and the final result exceeded my expectations. Will definitely use again.",
    },
    {
      name: "Suresh Reddy",
      designation: "Tile Worker",
      rating: 5,
      review:
        "Working with GeoGres products for 5+ years. The adhesive has excellent bonding strength and the tiles are easy to cut and install. Professional grade quality at reasonable prices.",
    },
  ];

  // duplicate for seamless scroll
  const row1Items = [...reviews, ...reviews];
  const row2Items = [...[...reviews].reverse(), ...[...reviews].reverse()];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-4 h-4 text-[#74103e] fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <svg
            className="w-4 h-4 text-gray-300 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <svg
              className="w-4 h-4 text-[#74103e]  fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>
        </div>
      );
    }

    return stars;
  };

  return (
    <div className="relative h-[70vh] py-16 bg-[#faebe3] rounded-t-[48px] mt-[-80px] pt-[30px] z-40 overflow-hidden ">
      <div className="mx-auto px-4">
        {/* Heading */}
        <h2 className="relative text-2xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-800 mb-10 uppercase">
          What Our <span className="italic text-[#8e7766]">Customers</span> Say
          {/* <span className="block w-20 md:w-28 h-[3px] bg-[#fa5b3d] mx-auto mt-3 rounded-full"></span> */}
        </h2>

        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <div className="animate-scroll-left flex gap-4 md:gap-6">
            {row1Items.map((review, index) => (
              <div
                key={`row1-${index}`}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-300 
                  max-w-[300px] sm:max-w-[310px] md:max-w-[350px] lg:max-w-[370px] 
                  flex-shrink-0 flex flex-col justify-between min-h-[200px] cursor-pointer"
              >
                {/* Stars + Review */}
                <div>
                  <div className="flex items-center mb-2">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-4">
                    "{review.review}"
                  </p>
                </div>

                <div
                  className={`w-10 md:w-7 h-1 rounded-full mt-3 md:mt-4 ${
                    index % 2 === 0 ? "bg-[#74103e]" : "bg-black"
                  }`}
                />

                {/* Name + Designation bottom right */}
                <div className="flex justify-end text-right mt-3">
                  <div>
                    <h4 className="font-semibold text-black text-sm">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-xs capitalize">
                      {review.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        {/* <div className="flex overflow-hidden mt-5">
          <div className="animate-scroll-right flex gap-4 md:gap-6">
            {row2Items.map((review, index) => (
              <div
                key={`row2-${index}`}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-300 
                  max-w-[300px] sm:max-w-[310px] md:max-w-[350px] lg:max-w-[370px] 
                  flex-shrink-0 flex flex-col justify-between min-h-[200px] cursor-pointer "
              >
                <div>
                  <div className="flex items-center mb-2">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-4">
                    "{review.review}"
                  </p>
                </div>

                <div
                  className={`w-10 md:w-7 h-1 rounded-full mt-3 md:mt-4 ${
                    index % 2 === 0 ? "bg-[#fa5b3d]" : "bg-[#3944bc]"
                  }`}
                />

x                <div className="flex justify-end text-right mt-3">
                  <div>
                    <h4 className="font-semibold text-black text-sm">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-xs capitalize">
                      {review.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
          animation-play-state: running;
        }

        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
          animation-play-state: running;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Review;
