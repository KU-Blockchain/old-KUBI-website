import React from "react";
import { MantineProvider, Text } from "@mantine/core";
import { HeaderSimple } from "../components/header";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Events from "./Events";

import StoreFront from "./StoreFront/StoreFront";

import DAOhome from "./DAO/DAOhome";
import Deploy from "./DAO/deploy";
import Lock from "./DAO/lock";
import NFT from "./DAO/NFT";
import Calc from "./DAO/calc"
import Mint from "./DAO/mint"

import About from "./About/About";
import AboutKUBI from "./About/AboutKUBI";
import AboutBlockchain from "./About/AboutBlockchain";



const link = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/events", label: "Events" },
  { link: "/DAO", label: "DAO" },
  { link: "/storefront", label: "Storefront" },
];
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      fontFamily: 'Verdana, sans-serif',
      fontFamilyMonospace: 'Monaco, Courier, monospace',
      headings: { fontFamily: 'Greycliff CF, sans-serif' },
      colorScheme: 'dark'
    }}>
      <MantineProvider inherit>
        
      
      <HeaderSimple links={link}></HeaderSimple>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DAO" element={<DAOhome />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/DAO/deploy" element={<Deploy />} />
        <Route path="/DAO/deploy/lock" element={<Lock />} />
        <Route path="/DAO/deploy/NFT" element={<NFT />} />
        <Route path="/DAO/deploy/mint" element={<Mint />} />
        <Route path="/DAO/calculator" element={<Calc />} />
        <Route path="/storefront" element={<StoreFront />} />
        <Route path="/aboutBlockchain" element={<AboutBlockchain />} />
        <Route path="/aboutKUBI" element={<AboutKUBI />} />
        
      </Routes>
      </MantineProvider>
    </MantineProvider>
  );
}

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
