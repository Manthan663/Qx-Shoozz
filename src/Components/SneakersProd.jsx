import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";
import { FaCodeCompare } from "react-icons/fa6";
import CartContext from "../utils/CartContext";
import { useContext } from "react";

const SneakersProd = ({ item, wishlist, handlewishlist }) => {
  const { addToCart } = useContext(CartContext);

  const iswishlisted = wishlist.some(
    (product) => item.id === product.id
  );

  return (
    <div className="group overflow-hidden transition-all duration-300">
      

      <div className="relative overflow-hidden">

       
        <img
          src={item.Image}
          alt={item.Name}
          className="w-full md:transition-opacity duration-500 md:group-hover:opacity-0"
        />

      
        <img
          src={item.NewImage}
          alt={item.Name}
          className="hidden md:block absolute top-0 left-0 w-full opacity-0 transition-all duration-500 md:group-hover:opacity-100 md:group-hover:scale-105"
        />
      </div>

    
      <div className="bg-white mt-5 transition-transform duration-300 md:group-hover:-translate-y-20">
        
        <p>{item.Price}</p>
        <h1 className="text-lg text-black font-semibold">
          {item.Name}
        </h1>
        <p>{item.Type}</p>

 
        <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">

          <hr className="mt-5" />

          <span className="flex items-center justify-between mt-7">

           
            <p
              className="text-sm flex gap-3 p-1 cursor-pointer"
              onClick={() => addToCart(item)}
            >
              <FiShoppingCart />
              ADD TO CART
            </p>

          
            <div className="flex gap-2 items-center">
              <FiEye />

              <FiHeart
                onClick={() => handlewishlist(item)}
                className={`cursor-pointer transition ${
                  iswishlisted
                    ? "text-red-500 fill-red-500"
                    : "text-black"
                }`}
              />

              <FaCodeCompare />
            </div>

          </span>
        </div>
      </div>
    </div>
  );
};

export default SneakersProd;