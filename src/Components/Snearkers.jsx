const Sneakers = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-7 gap-2">
      <h1 className="uppercase text-gray-400">
        The latest trends in athletic footwear
      </h1>

      <p className="text-5xl font-bold">Sneakers & Kicks</p>

      <span className="flex gap-5 mt-5 border-b p-3">
        <p className="text-gray-700 hover:text-black cursor-pointer">FEATURED</p>
        <p className="text-gray-700 hover:text-black cursor-pointer">NEW ARRIVALS</p>
        <p className="text-gray-700 hover:text-black cursor-pointer">BEST SELLER</p>
      </span>
    
    </div>
  );
};

export default Sneakers;
