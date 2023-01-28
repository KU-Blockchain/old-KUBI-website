import React from "react";
import jayhawk from "./jayhawk-4.png";
import { CardsCarousel } from "../components/carousel";
import { Group } from "@mantine/core";

const Home = () => {
  return (
    <>
    <div>i want to put a scrolling banner here</div>
      <Group>
        <img src={jayhawk} alt="" width="500" height="500" />
        <div>About us section</div>
      </Group>
      <CardsCarousel />
      
    </>
  );
};

export default Home;
