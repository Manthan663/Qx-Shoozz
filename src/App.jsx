import HeroCarousel from "./Components/HeroCarousel";
import CollectionData from "./Components/Hero/CollectionData";
import Sneakers from "./Components/Snearkers";
import Hero from "./Components/Hero";
import Banner from "./Components/Banner";
import Movingstrip from "./Components/Movingstrip";
import Boots from "./Components/Boots";
import ShoesData from "./Components/ShoesData";
import FashionData from "./Components/FashioData";
import Season from "./Components/Season";
import Section from "./Components/Section";
import Store from "./Components/Store";
import Logo from "./Components/Logo";
import Post from "./Components/Post";
import News from "./Components/News";

import { useOutletContext } from "react-router-dom";

function App() {
  const { wishlist, handlewishlist } = useOutletContext();

  return (
    <>
      <HeroCarousel />
      <CollectionData />

      <Sneakers />

      <Hero wishlist={wishlist} handlewishlist={handlewishlist} />

      <Banner />
      <Movingstrip />
      <Boots />
      <ShoesData />
      <FashionData />
      <Season />
      <Section />
      <Store />
      <Logo />
      <Post />
      <News />
    </>
  );
}

export default App;
