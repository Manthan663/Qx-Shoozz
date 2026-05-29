import banr1 from "../assets/wide-banner.webp";

const Banner = () => {
  return (
    <div className="relative flex flex-col">
      <img src={banr1} className="w-full object-cover"></img>

      <div className="absolute right-0 top-1/4">
        <h1 className="tracking-[2px] px-20">COMFORT MEETS FASHION</h1>
      </div>
      <span className="absolute top-1/3 right-10">
        <p className="max-w-lg text-4xl font-semibold">
          Discover shoes that look great and feel even better
        </p>
      </span>
      <span className="absolute top-1/2 right-10">
        <p className="max-wlg">
          Our collection features comfortable and stylish footwear designed to
          keep your feet happy all day long.
        </p>
      </span>

      <button className="absolute right-10 bottom-1/3 bg-red-400 px-3 py-1 text-white cursor-pointer hover:bg-black">SHOP NOW</button>
    </div>
        
  );
};

export default Banner;
