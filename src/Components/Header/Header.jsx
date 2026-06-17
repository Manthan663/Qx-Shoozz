import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Strip from "./Strip"

const Header = ({ wishlist }) => {
  return (
    <>
      <Strip/>
      <Topbar />
      <Navbar wishlist={wishlist} />
    </>
  );
};

export default Header;