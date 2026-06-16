import { FaArrowRight, FaCirclePlay } from "react-icons/fa6";
import Image1 from "../assets/video-pic.webp";

const Section = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10 md:px-20  py-20">

     
      <div className="w-full md:w-1/2 flex flex-col gap-8">

        <p className="tracking-[1px] text-gray-950 text-xs font-semibold">
          OUR MOST POPULAR STYLES
        </p>

        <h1 className="text-3xl md:text-5xl max-w-md font-semibold leading-tight">
          Save big on shoes from last season
        </h1>

        <p className="text-sm md:text-base text-gray-700">
          Morbi natoque id finibus natoque sapien turpis elementum maximus.
          Sociosqu auctor a urna consequat laoreet nisi accumsan magna.
          Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est
          habitant lacus sagittis vitae.
        </p>

        <p className="text-sm md:text-base text-gray-700">
          Molestie dolor mus vitae penatibus sed lectus convallis ut neque. Leo
          elementum euismod penatibus cras sociosqu aliquet tellus.
        </p>

        <button className="px-4 py-3 w-fit bg-red-400 text-white flex items-center justify-center gap-3 hover:bg-black transition-colors duration-300">
          SHOP NOW <FaArrowRight />
        </button>
      </div>

    
      <div className="relative w-full flex justify-center">
        <img
          src={Image1}
          alt="video preview"
          className="w-full max-w-2xl rounded-lg object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full h-20 w-20  bg-white/20 flex items-center justify-center ring-1 ring-white cursor-pointer hover:scale-105 transition">
            <FaCirclePlay className="text-white text-2xl md:text-3xl" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section;