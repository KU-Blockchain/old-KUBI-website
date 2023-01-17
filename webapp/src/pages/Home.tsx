import React from "react";
import jayhawk from "./jayhawk-4.png"
import { CardsCarousel} from "../components/carousel"


const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  //other items
];

const Home = () => {
  return (
    <>
      <CardsCarousel />
      <img src={jayhawk} alt="" width ="500" height = "500" />
      <div>Home</div>
      
    </>
  );
};

export default Home;
