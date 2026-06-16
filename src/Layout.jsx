import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";


function Layout() {
  const [wishlist, setwishlist] = useState([]);

  const handlewishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    if (exists) {
      setwishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setwishlist([...wishlist, product]);
    }
  };

  const handleRemoveWishlist = (id)=>{
    setwishlist((prev)=> prev.filter((item)=>item.id!==id))
  }



  return (
    <>
      <Header wishlist={wishlist} />
      <Outlet context={{ wishlist, handlewishlist,handleRemoveWishlist }} />
      <Footer />
    </>
  );
}
export default Layout;
