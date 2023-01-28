import React from "react";
import jayhawk from "./jayhawk-4.png"
import { CardsCarousel} from "../components/carousel"



const Home = () => {
  return (
    <>
      <div>i want to put a scrolling banner here</div>
      <CardsCarousel />
      <img src={jayhawk} alt="" width ="500" height = "500" />
      <div>Home</div>
      
    </>
  );
};

export default Home;
