import Banner from "./Components/Banner";
import Boots from "./Components/Boots";
import FashionData from "./Components/FashioData";
import Header from "./Components/Header/Header";
import CollectionData from "./Components/Hero/CollectionData";
import HeroCarousel from "./Components/HeroCarousel";
import Movingstrip from "./Components/Movingstrip";
import Season from "./Components/Season";
import Section from "./Components/Section";
import ShoesData from "./Components/ShoesData";
import SneakersData from "./Components/SneakersData";
import Sneakers from "./Components/Snearkers";

function App() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <CollectionData />
      <Sneakers />
      <SneakersData />
      <Banner/>
      <Movingstrip/>
      <Boots/>
      <ShoesData/>
      <FashionData/>
      <Season/>
      <Section/>
    </>
  );
}

export default App;
