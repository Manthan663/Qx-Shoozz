import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Header = ({ wishlist }) => {
  return (
    <>
      <Topbar />
      <Navbar wishlist={wishlist} />
    </>
  );
};

export default Header;