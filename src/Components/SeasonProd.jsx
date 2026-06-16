const SeasonProd = ({ item }) => {
  return (
    <div className="flex items-center gap-4">
      
      <img
        src={item.img}
        alt={item.Name}
        className="w-20 h-20 object-cover cursor-pointer rounded-md"
      />

      <div className="flex flex-col gap-1">
        <p className="text-lg font-medium">{item.Name}</p>
        <p className="text-gray-600">{item.Price}</p>
      </div>

    </div>
  );
};

export default SeasonProd;