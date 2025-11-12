import React from "react";
import { useNavigate } from "react-router-dom";
import { Layers, Square, SquareMousePointer } from "lucide-react";

const tools = [
  {
    id: "adhesive-coverage",
    title: "Adhesive Coverage Calculator",
    description:
      "Estimate the right quantity of adhesive required for your project.",
    icon: Layers,
    link: "/tools/adhesive-coverage",
  },
  {
    id: "joint-filler-coverage",
    title: "Joint Filler Coverage Calculator",
    description: "Calculate how much filler you need for perfect joints.",
    icon: Square,
    link: "/tools/joint-filler-coverage",
  },
  {
    id: "tile-adhesive-recommender",
    title: "Tile Adhesive Recommender",
    description: "Get the right adhesive recommendation for your tiles.",
    icon: SquareMousePointer,
    link: "/tools/tile-adhesive-recommender",
  },
];

const UsefulTools = () => {
  const navigate = useNavigate();

  return (
    <section
      id="tools"
      className="bg-[#faebe3] z-30 min-h-screen text-black py-20 px-6 sm:px-12 rounded-t-[58px] relative mt-[-40px] pt-[40px] flex justify-center items-center"
    >
      {/* Inner Container */}
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-6xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold uppercase">
            Useful Tools
          </h2>
          <p className="mt-4  mx-auto text-black ">
            Friendly tools to help you select the right product, match shades to
            your tiles, <br />
            and estimate the right quantity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                onClick={() => navigate(tool.link)}
                className="group bg-[#faebe3] p-8 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-[#b09c8d] hover:shadow-xl flex flex-col items-center text-center hover:text-white"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#b09c8d] group-hover:bg-[#faebe3] mb-6 transition-all ">
                  <Icon className="w-10 h-10 text-white group-hover:text-[#74103e] "  />
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase group-hover:text-white">
                  {tool.title}
                </h3>
                <div className="w-16 h-0.5 bg-[#74103e] mx-auto rounded-full"></div>
                <p className="text-black text-sm font-medium italic opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-2 uppercase group-hover:text-white">
                  {tool.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UsefulTools;
