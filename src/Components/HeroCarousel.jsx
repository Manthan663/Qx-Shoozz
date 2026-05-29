import careRouselData from "../Constants/careRouselData";
import {FiArrowRight} from "react-icons/fi";

const HeroCarousel = () => {
  return (
    <div className="relative w-full h-screen flex items-start">
      {careRouselData.map((item, index) => (
        <div
          key={item.id}
          className={`absolute lg:inset-0 ${index === 0 ? "block" : "hidden"}`}
        >
          <img src={item.image}  className="lg:w-screen md:w-3xl  object-cover" />

          <div className="absolute inset-0 bg-black/50 lg:w-380 lg:h-157 md:w-2xl"></div>

          <div className="absolute inset-0 lg:left-1/2 md:left-28 flex flex-col items-center justify-center text-center gap-6">
            <p className="text-white tracking-widest">{item.paragraph}</p>

            <h1 className="text-white text-5xl md:text-7xl font-serif max-w-4xl">
              {item.Description}
            </h1>

            <p className="text-white text-lg max-w-lg">{item.subDescription}</p>

             <button className="absolute left-20 bottom-1/4 translate-y-10 bg-red-400 px-3 py-2  hover:bg-black rounded-lg text-white flex items-center justify-center gap-2">{item.Btns}<FiArrowRight/></button>
          </div>

         
        </div>
        
      ))}
    </div>
  );
};

export default HeroCarousel;
