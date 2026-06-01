import { FaArrowRight, FaCirclePlay } from "react-icons/fa6";
import Image1 from "../assets/video-pic.webp";

const Section = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-10 px-10 py-20">
        <div className="w-1/2 flex flex-col px-24 mt-36 gap-10">
          <p className="tracking-[1px] text-gray-950 text-xs font-semibold">
            OUR MOST POPULAR STYLES
          </p>

          <h1 className="text-5xl max-w-md font-semibold">
            Save big on shoes from last season
          </h1>

          <p>
            Morbi natoque id finibus natoque sapien turpis elementum maximus.
            Sociosqu auctor a urna consequat laoreet nisi accumsan magna.
            Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est
            habitant lacus sagittis vitae.
          </p>

          <p>
            Molestie dolor mus vitae penatibus sed lectus convallis ut neque.
            Leo elementum euismod penatibus cras sociosqu aliquet tellus.
          </p>

          <button className="px-3 py-2 w-36 bg-red-400 text-white flex items-center gap-3 hover:bg-black transition-colors duration-300">
            SHOP NOW <FaArrowRight />
          </button>
        </div>

        <div className="relative w-1/2 flex gap-6">
          <img src={Image1}></img>
          <div className="absolute top-1/3 left-2/4 rounded-full py-5 ring-1 px-5 h-30 w-30 flex items-center justify-center">
            <FaCirclePlay className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
