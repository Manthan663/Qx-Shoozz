import Fashion from "../Constants/Fashion";
import FashionProd from "./FashionProd";

const FashionData = () => {
  return (
    <div className="bg-[#333333] mt-10 flex flex-col items-center gap-6 p-5">
      
      <h1 className="text-white">FASHION SNEAKERS</h1>

      <p className="lg:text-2xl md:text-4xl text-white font-semibold text-center">
        Timeless styles for everyday wear
      </p>

      <p className="max-w-sm text-white text-center">
        High-performance footwear for sports and workouts
      </p>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {Fashion.slice(0, 3).map((item) => (
          <FashionProd key={item.id} item={item} />
        ))}
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-full">
        <FashionProd item={Fashion[3]} />
        <FashionProd item={Fashion[4]} />
      </div>

    </div>
  );
};

export default FashionData;