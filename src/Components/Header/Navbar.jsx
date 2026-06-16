import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
} from "react-icons/fi";
import logo from "../../assets/logo.webp";
import { navbarItems } from "../../Constants/Navbar";
import NavItem from "../Header/NavItem";
import Shoes from "../../Constants/Shoes";
import Seasons from "../../Constants/Seasons";
import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { FaPlus, FaMagnifyingGlass } from "react-icons/fa6";
import SearchResult from "../SearchResult";
import { Link } from "react-router-dom";
import CartSidebar from "../../CartSidebar";
import CartContext from "../../utils/CartContext";


const products = [...Seasons, ...Shoes];

const Navbar = ({ wishlist }) => {
  const [showSearch, setshowSearch] = useState(false);
  const [searchItem, setsearchItem] = useState("");
  const [isCartOpen, setIsCartopen] = useState(false);
  const [MenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const { Cart } = useContext(CartContext);

  const filteredProducts = products.filter((product) =>
    product.Name.toLowerCase().includes(searchItem.toLowerCase()),
  );

  return (
    <>
      <nav className="relative h-20 bg-white px-10 mt-4">
        <div className="flex lg:hidden h-full items-center justify-between">
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />

          <div className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="logo" className="h-7 w-auto" />
          </div>

          <div className="flex items-center gap-4 text-2xl">
            <FiSearch
              className="cursor-pointer"
              onClick={() => setshowSearch(true)}
            />
            <Link to="/wishlist">
              <div className="relative">
                <FiHeart />
                <span className="absolute -bottom-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              </div>
            </Link>
            <div className="relative">
              <FiShoppingBag
                onClick={() => setIsCartopen(true)}
                className="cursor-pointer"
              />
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {Cart.length}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex h-12 items-center justify-between">
          <div>
            <img src={logo} alt="logo" className="h-7 lg:w-auto" />
          </div>

          <ul className="flex items-center gap-10">
            {navbarItems.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>

          <div className="flex items-center gap-5 text-2xl">
            <FiSearch
              className="cursor-pointer"
              onClick={() => setshowSearch(true)}
            />
            <FiUser />
            <Link to="/wishlist">
              <div className="relative">
                <FiHeart />
                <span className="absolute -bottom-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              </div>
            </Link>
            <div className="relative">
              <FiShoppingBag
                onClick={() => setIsCartopen(true)}
                className="cursor-pointer"
              />
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {Cart.length}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {showSearch && (
        <div
          className="fixed top-0 left-0 w-full bg-white z-50"
          style={{ height: "550px" }}
        >
          <div className="max-w-3xl mx-auto px-8 pt-10">
            <div className="flex justify-between items-center mb-8">
              <p className="text-xs text-gray-400 uppercase tracking-widest">
                What are you looking for?
              </p>
              <MdClose
                className="text-xl cursor-pointer"
                onClick={() => {
                  setshowSearch(false);
                }}
              />
            </div>
            <div className="flex items-center border-b border-gray-300 pb-3 mb-8">
              <input
                type="text"
                value={searchItem}
                onChange={(e) => setsearchItem(e.target.value)}
                autoFocus
                className="w-full text-2xl outline-none text-gray-800 placeholder:text-gray-300"
              />
              <FaMagnifyingGlass className="text-gray-400 text-lg ml-3" />
            </div>
            {searchItem.length > 0 && (
              <SearchResult
                products={filteredProducts}
                searchItem={searchItem}
              />
            )}
          </div>
        </div>
      )}

      {MenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl flex flex-col translate-x-0 transition-transform duration-300">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <img src={logo} alt="logo" className="h-6 w-auto" />
              <MdClose
                className="text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            <div className="flex flex-col px-6 py-6 overflow-y-auto">
              {navbarItems.map((item) => (
                <div key={item.id} className="border-b border-gray-100">
                  <div className="flex items-center justify-between py-4">
                    <NavItem item={item} />
                    {item.submenu && (
                      <FaPlus
                        onClick={() =>
                          setOpenMenu(openMenu === item.id ? null : item.id)
                        }
                        className="{`cursor-pointer transition-transform
                      duration-300"
                      />
                    )}
                  </div>
                  {openMenu === item.id && item.submenu && (
                    <div className="pl-4 pb-4">
                      {item.submenu.map((section, index) => (
                        <div key={index} className="mb-2 text-sm">
                          {
                            <h3 className="font-bold text-lg">
                              {section.title}
                            </h3>
                          }

                          <ul>
                            {section.items?.map((subitem, i) => (
                              <li key={i} className="">
                                {subitem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                     
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-auto px-6 pb-8 border-t border-gray-100 pt-6 flex flex-col gap-4 text-sm text-gray-600">
              <Link
                to="/wishlist"
                className="flex items-center gap-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiHeart /> Wishlist ({wishlist.length})
              </Link>

              <button
                className="flex items-center gap-3"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsCartopen(true);
                }}
              >
                <FiShoppingBag /> Cart ({Cart.length})
              </button>
              <div className="flex items-center  gap-3">
                <FiUser /> Account
              </div>
            </div>
          </div>
        </>
      )}

      <CartSidebar isCartOpen={isCartOpen} setIsCartopen={setIsCartopen} />
    </>
  );
};

export default Navbar;
