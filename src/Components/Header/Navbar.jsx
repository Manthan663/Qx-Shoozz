import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import logo from "../../assets/logo.webp";
import { navbarItems } from "../../Constants/Navbar";
import NavItem from "../Header/NavItem";


const Navbar = () => {
  return (
    <nav className="relative h-20 bg-white px-10 mt-4">
      <div className="h-12 flex items-center justify-between">

        <div>
          <img src={logo} alt="logo" className="h-7 w-auto" />
        </div>

    
        <ul className="hidden lg:flex items-center gap-10">
             {navbarItems.map((item)=>(
                
                <NavItem key={item.id} item={item}/>
             ))}
        </ul>

        
        <div className="flex items-center gap-5 text-2xl">
          <FiSearch />
          <FiUser />
        <div className="relative">
          <FiHeart />
          <span className="absolute -bottom-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
        </div>
          <div className="relative">
            <FiShoppingBag />
            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
