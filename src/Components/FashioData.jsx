import Fashion from "../Constants/Fashion";
import FashionProd from "./FashionProd";

const FashionData = () => {
  return (
    <div className="bg-[#333333] mt-10 flex flex-col items-center gap-3 p-5">
      <h1 className="text-white">FASHION SNEAKERS</h1>

      <p className="text-4xl text-white font-semibold">
        Timeless styles for everyday wear
      </p>

      <p className="w-80 text-white text-center">
        High-performance footwear for sports and workouts
      </p>

      <div className="flex gap-5">
        {Fashion.slice(0, 3).map((item) => (
          <FashionProd key={item.id} item={item} />
        ))}
      </div>

      <div className="flex gap-5 mt-5 w-full">
        <div className="w-[70%]">
          <FashionProd item={Fashion[3]} />
        </div>

        <div className="w-[80%]">
          <FashionProd item={Fashion[4]} />
        </div>
      </div>
    </div>
  );
};

export default FashionData;
