const FashionProd = ({ item }) => {
  return (
    <>
      <div className="group relative overflow-hidden h-87.5 ">
        <img
          src={item.img}
          className=" w-full h-full group-hover:scale-105 transition-transform duration-300 "
        ></img>

        <div className="absolute top-1/3 left-10 flex flex-col  gap-3 font-semibold">
          <p className="text-white top-1/2">{item.title}</p>
          <h2 className="text-4xl text-white max-w-xs">{item.Descrption}</h2>
        </div>
        <button className="absolute text-white bottom-10 underline left-10 cursor-pointer">
          SHOP NOW
        </button>
      </div>
    </>
  );
};

export default FashionProd;
