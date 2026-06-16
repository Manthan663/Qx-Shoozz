import banr1 from "../assets/wide-banner.webp";

const Banner = () => {
  return (
    <div className="relative w-full">

     
      <img
        src={banr1}
        alt="banner"
        className="w-full h-75 sm:h-100 md:h-auto object-cover"
      />

     
      <div className="absolute lg:right-0 lg:max-w-2xl top-1/4 text-center flex items-center justify-center">
        
        <div className="bg-black/0 md:bg-transparent text-white px-6 sm:px-10 md:px-20 lg:max-w-xl">

       
          <h1 className="tracking-[2px] text-xs sm:text-sm md:text-xs lg:text-lg mb-2 text-gray-600">
            COMFORT MEETS FASHION
          </h1>

         
          <p className="text-lg sm:text-2xl md:text-4xl font-semibold leading-snug text-black">
            Discover shoes that look great and feel even better
          </p>

          
          <p className="mt-3 text-xs sm:text-sm md:text-base text-black max-w-md">
            Our collection features comfortable and stylish footwear designed to
            keep your feet happy all day long.
          </p>

         
          <button className="mt-5 bg-red-500 hover:bg-black transition px-4 py-2 text-sm sm:text-base">
            SHOP NOW
          </button>

        </div>
      </div>
    </div>
  );
};

export default Banner;