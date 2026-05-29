import Sneaker from "../Constants/Sneaker";
import SneakersProd from "./SneakersProd";

const SneakersData = () =>{
      return (
        <div className="flex gap-10 mt-10 cursor-pointer p-5">
            {Sneaker.map((item)=>(
                <SneakersProd key={item.id} item={item}/>
            ))}
        </div>
      )
}

export default SneakersData

