import Shoes from "../Constants/Shoes";
import Shoesprod from "./Shoesprod";

const ShoesData = () => {
  return (
    <div className="flex gap-10 mt-10 cursor-pointer">
      {Shoes.map((item) => (
        <Shoesprod key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShoesData;
