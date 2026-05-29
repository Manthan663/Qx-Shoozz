const Collections = ({ item }) => {
  return (
    <div className="relative overflow-hidden rounded-xl cursor-pointer group">
      <img
        src={item.image}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute flex flex-col gap-10 top-10 px-5 font-semibold tracking-[2px]">
        <h1 className="text-lg">{item.title}</h1>

        <p className="w-10 text-xl">{item.Name}</p>

        <button className="text-red-500 underline underline-offset-1">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Collections;