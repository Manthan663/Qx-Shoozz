import { FaCartShopping } from "react-icons/fa6";
import CartContext from "./utils/CartContext";
import { useContext, useEffect, useRef, useMemo } from "react";

const CartSidebar = ({ isCartOpen, setIsCartopen }) => {
  const { Cart, removeCart } = useContext(CartContext);
  const CartRef = useRef(null);

  const FreeShipping = 1000;
  const TotalPrice = useMemo(() => {
    return Cart.reduce(
      (total, item) =>
        total + parseFloat(item.Price.replace("$", "")) * item.qty,
      0,
    );
  }, [Cart]);

  const remainingAmount = Math.max(FreeShipping - TotalPrice, 0);

  const Progress = Math.min((TotalPrice / FreeShipping) * 100, 100);
  useEffect(() => {
    function handler(event) {
      if (!CartRef.current?.contains(event.target)) {
        setIsCartopen(false);
      }
    }
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [setIsCartopen]);
  return (
    <>
      {isCartOpen && <div className="fixed inset-0 bg-black/40 z-40" />}
      <div
        ref={CartRef}
        className={`fixed top-0 right-0 h-screen w-96 bg-white z-50 transition-transform duration-300 overflow-y-auto ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4 border-b">
          <h2 className="font-semibold bg-gray-200 rounded-full py-4 px-4">
            Cart ({Cart.length})
          </h2>
          <button onClick={() => setIsCartopen(false)} className="text-black">
            X
          </button>
        </div>

        {Cart.length === 0 ? (
          <div className="relative top-1/3 flex flex-col items-center justify-center gap-5">
            <span className="rounded-full bg-gray-200 px-7 py-7">
              <FaCartShopping />
            </span>
            <h1 className="text-gray-500 text-xl">No Products in the Cart</h1>
          </div>
        ) : (
          <>
            <div className="border-t p-4">
              {remainingAmount > 0 ? (
                <p>
                  Spend ${remainingAmount.toFixed(2)} for free shipping unlocked
                </p>
              ) : (
                <p className="text-gray-400">Free Shipping Unlocked</p>
              )}

              <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
                <div
                  className="h-3 bg-black rounded-full transition-transform duartion-300"
                  style={{ width: `${Progress}%` }}
                ></div>
              </div>
            </div>
            <div className="p-4 space-y-4 mt-10">
              {Cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.Image} className="w-20 h-20 object-cover" />
                  <span className="flex flex-col">
                    <h1>{item.Name}</h1>
                    <p className="text-gray-400 text-lg ">
                      {item.Price}x{item.qty}
                    </p>

                    <span
                      className="text-gray-400 underline cursor-pointer"
                      onClick={() => removeCart(item.id)}
                    >
                      Remove
                    </span>
                  </span>
                </div>
              ))}
              <h1 className="font-bold">You May Also Like</h1>

              <div className="flex  gap-10 mt-10 border-t border-b p-4">
                <p>Order Note</p>
                <p>Coupon</p>
                <p>Shipping</p>
              </div>
              <div className="group">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Total:</span>
                    <span className="text-sm max-w-sm">
                      Taxes and shipping calculated at checkout
                    </span>
                  </div>
                  <span>${TotalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-10">
                  <span className="opacity-0 group-hover:opacity-100 bg-black px-4 py-2 text-white h-auto w-auto">
                    VIEW CART
                  </span>
                  <span className=" bg-red-500 px-4 py-2 text-white h-auto w-auto tracking-[2px]">
                    CHECK OUT
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
