import { Award, Beaker, Globe, Leaf, Package, Users } from "lucide-react";

const pointers = [
  {
    id: 1,
    title: "Premium Quality Control",
    description: "Every batch is tested for performance and durability.",
    icon: Award,
  },
  {
    id: 2,
    title: "Advanced R & D",
    description: "Continuous innovation for evolving construction needs.",
    icon: Beaker,
  },
  {
    id: 3,
    title: "Pan-India/Global Reach",
    description: "Available across major cities with reliable distribution.",
    icon: Globe,
  },
  {
    id: 4,
    title: "Eco-Friendly Solutions",
    description: "Formulated with minimal environmental impact.",
    icon: Leaf,
  },
  {
    id: 5,
    title: "Wide Product Range",
    description:
      "Tile adhesives for ceramic, vitrified, natural stone and more.",
    icon: Package,
  },
  {
    id: 6,
    title: "Trusted by Experts",
    description: "Used by top contractors, architects, and builders.",
    icon: Users,
  },
];

const leftTimeline = pointers.slice(0, 3);
const rightTimeline = pointers.slice(3, 6);

function TimelineItem({ pointer, index, isLast }) {
  const IconComponent = pointer.icon;

  return (
    <div className="relative flex items-start group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-24 bg-[#b09c8d]"></div>
      )}

      {/* Icon badge */}
      <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-[#74103e] rounded-full flex items-center justify-center text-white shadow-lg  transition-colors duration-300">
        <IconComponent className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <div className="ml-6 pb-12">
        <div className="flex items-center mb-3">
          <h3 className="text-xl font-bold text-white  transition-colors duration-300">
            {pointer.title}
          </h3>
        </div>
        <p className="text-gray-400 leading-relaxed max-w-sm">
          {pointer.description}
        </p>
      </div>
    </div>
  );
}


function Pointers() {
  return (
    <div className="relative py-16 bg-black rounded-t-[50px] mt-[-60px] pt-[30px] z-40 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 uppercase">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
            What <span className="text-[#faebe3]">Sets Us</span> Apart
          </h2>
          <span className="block w-20 md:w-28 h-[3px] bg-[#74103e] mx-auto mt-3 rounded-full"></span>
        </div>

        <div className="flex justify-center">
          {/* Mobile - Single continuous timeline */}
          <div className="lg:hidden max-w-md">
            <div className="space-y-0">
              {pointers.map((pointer, index) => (
                <TimelineItem
                  key={pointer.id}
                  pointer={pointer}
                  index={index}
                  isLast={index === pointers.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Desktop - Dual timeline */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-24 max-w-4xl">
            {/* Left Timeline */}
            <div className="space-y-0">
              {leftTimeline.map((pointer, index) => (
                <TimelineItem
                  key={pointer.id}
                  pointer={pointer}
                  index={index}
                  isLast={index === leftTimeline.length - 1}
                />
              ))}
            </div>

            {/* Right Timeline */}
            <div className="space-y-0">
              {rightTimeline.map((pointer, index) => (
                <TimelineItem
                  key={pointer.id}
                  pointer={pointer}
                  index={index + 3}
                  isLast={index === rightTimeline.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pointers;
