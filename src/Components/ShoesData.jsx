import Shoes from "../Constants/Shoes";
import Shoesprod from "./Shoesprod";

const ShoesData = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 cursor-pointer">
      {Shoes.map((item) => (
        <Shoesprod key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShoesData;