import { FaArrowRight, FaCirclePlay } from "react-icons/fa6";
import Image1 from "../assets/video-pic.webp";

const Section = () => {
  return (
    <div className="flex items-center justify-center gap-10 px-10 py-20">
      <div className="w-1/2 flex flex-col px-24 gap-8">
        <p className="tracking-[1px] text-gray-950 text-xs font-semibold">
          OUR MOST POPULAR STYLES
        </p>

        <h1 className="text-5xl max-w-md font-semibold leading-tight">
          Save big on shoes from last season
        </h1>

        <p>
          Morbi natoque id finibus natoque sapien turpis elementum maximus.
          Sociosqu auctor a urna consequat laoreet nisi accumsan magna.
          Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est
          habitant lacus sagittis vitae.
        </p>

        <p>
          Molestie dolor mus vitae penatibus sed lectus convallis ut neque. Leo
          elementum euismod penatibus cras sociosqu aliquet tellus.
        </p>

        <button className="px-4 py-3 w-40 bg-red-400 text-white flex items-center justify-center gap-3 hover:bg-black transition-colors duration-300">
          SHOP NOW <FaArrowRight />
        </button>
      </div>

      <div className="relative w-1/2 flex justify-center">
        <img
          src={Image1}
          alt=""
          className="w-full max-w-3xl rounded-lg object-cover"
        />

        <div className="absolute left-1/2 top-1/4 flex items-center justify-center">
          <div className="rounded-full h-32 w-32 bg-white/20  flex items-center justify-center ring-1 ring-white ">
            <FaCirclePlay className="text-white text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
