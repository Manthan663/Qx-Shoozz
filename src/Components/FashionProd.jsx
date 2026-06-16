const FashionProd = ({ item }) => {
  return (
    <div className="group relative overflow-hidden h-100 rounded-lg">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute top-1/3 left-5  flex flex-col gap-3 font-semibold">
        <p className="text-white text-sm md:text-base">
          {item.title}
        </p>

        <h2 className="lg:text-2xl md:text-4xl text-white lg:max-w-xs">
          {item.Descrption}
        </h2>
      </div>

      <button className="absolute text-white bottom-8 left-5 md:left-10 underline cursor-pointer">
        SHOP NOW
      </button>
    </div>
  );
};

export default FashionProd;