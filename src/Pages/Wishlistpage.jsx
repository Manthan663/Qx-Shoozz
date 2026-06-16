import { useOutletContext } from "react-router-dom";



const Wishlistpage = () => {
  const { wishlist,handleRemoveWishlist } = useOutletContext();
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className=" text-gray-500 flex items-center justify-center">
          There are no products in your wishlist
        </p>
      ) : (
        <div className="flex items-center justify-center gap-10">
          {wishlist.map((item) => (
            <div key={item.id} className="relative flex  mb-6 mt-10">
              <img src={item.Image} className="w-30 h-30 object-cover" />
              <span className="flex flex-col gap-3 p-2">
                <h3 className="font-semibold">{item.Name}</h3>
                <p>{item.Price}</p>
                <button onClick={()=>handleRemoveWishlist(item.id)} className="cursor-pointer">Remove</button>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Wishlistpage;
