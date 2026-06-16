import Sneaker from "../Constants/Sneaker";
import SneakersProd from "./SneakersProd";

const SneakersData = ({ wishlist, handlewishlist }) => {
  return (
    <div className="lg:flex md:grid grid-cols-1 gap-10 mt-10 cursor-pointer p-5">
      {Sneaker.map((item) => (
        <SneakersProd
          key={item.id}
          item={item}
          handlewishlist={handlewishlist}
          wishlist={wishlist}
        />
      ))}
    </div>
  );
};

export default SneakersData;