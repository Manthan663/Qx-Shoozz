import { useEffect, useState } from "react";
import careRouselData from "../Constants/careRouselData";
import { FiArrowRight } from "react-icons/fi";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev === careRouselData.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative w-full h-[60vw] min-h-100 max-h-screen overflow-hidden">
      {careRouselData.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt={item.Description}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 gap-3 sm:gap-5">
            <p className="text-white tracking-widest text-xs sm:text-sm uppercase">
              {item.paragraph}
            </p>

            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-serif max-w-3xl leading-tight">
              {item.Description}
            </h1>

            <p className="text-white text-sm sm:text-base max-w-md">
              {item.subDescription}
            </p>

            {/* Button inline in flow — no absolute positioning */}
            <button className="mt-2 bg-red-400 hover:bg-black transition-colors px-4 py-2 rounded-lg text-white flex items-center gap-2 text-sm sm:text-base">
              {item.Btns}
              <FiArrowRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
