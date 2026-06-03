import { Logos } from "../Constants/Logos";

const Logo = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl text-black font-semibold">
          Customer Feedback Highlights
        </h1>
        <p className="max-w-xs text-center text-gray-400 pt-4">
          Laoreet ridiculus congue magna malesuada phasellus condimentum taciti
          mus primis.
        </p>
      
      <div className="bg-white">
        <div className="grid grid-cols-5 gap-8 px-4">
          {Logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              loading="lazy"
              className="w-82.7 object-contain text-gray-400"
            ></img>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Logo;
