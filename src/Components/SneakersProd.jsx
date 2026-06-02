import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";
import { FaCodeCompare } from "react-icons/fa6";

const SneakersProd = ({ item }) => {
  return (
    <div className="group overflow-hidden transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={item.Image}
          
          className="w-full transition-opacity duration-500 group-hover:opacity-0"
        />

        <img
          src={item.NewImage}
        
          className="absolute top-0 left-0 w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:scale-105"
        />
      </div>

      <div className="group-hover:-translate-y-20 bg-white transition-transform duration-300 mt-5">
        <p>{item.Price}</p>

        <h1 className="text-lg text-black font-semibold">{item.Name}</h1>

        <p>{item.Type}</p>

        <div className="opacity-0 group-hover:opacity-100 transition duration-300">
          <hr className="mt-5" />

          <span className="flex items-center justify-between mt-7">
            <p className="text-sm flex gap-3 p-1">
              <FiShoppingCart />
              ADD TO CART
            </p>

            <div className="flex gap-1">
              <FiEye />
              <FiHeart />
              <FaCodeCompare />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SneakersProd;
