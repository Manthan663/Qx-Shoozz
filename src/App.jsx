import Banner from "./Components/Banner";
import Boots from "./Components/Boots";
import Header from "./Components/Header/Header";
import CollectionData from "./Components/Hero/CollectionData";
import HeroCarousel from "./Components/HeroCarousel";
import Movingstrip from "./Components/Movingstrip";
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
    </>
  );
}

export default App;
