const Collections = ({ item }) => {
  return (
    <div className="relative overflow-hidden lg:rounded-xl rounded-b-none cursor-pointer group ">
      <img
        src={item.image}
        className="w-full lg:h-full md:h-36  object-cover group-hover:scale-105 transition-transform duration-500 "
      />

      <div className="absolute inset-0 flex flex-col lg:gap-10 justify-center  px-6 tracking-[2px]">
        <h1 className="lg:text-lg md:text-sm">{item.title}</h1>

        <p className="w-10 md:w-5 text-xl">{item.Name}</p>

        <button className="text-red-500 underline underline-offset-1">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Collections;