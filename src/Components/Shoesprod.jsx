const Shoesprod = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={item.img}
        alt={item.Name}
        className="w-full h-62.5 sm:h-75 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="bg-white px-4 py-2 text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-500 lg:group-hover:bg-red-500 md:lg:group-hover:bg-red-500 group-hover:text-white">
          {item.Name}
        </div>
      </div>
    </div>
  );
};

export default Shoesprod;