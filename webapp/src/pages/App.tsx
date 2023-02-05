import React from "react";
import { MantineProvider, Text } from "@mantine/core";
import { HeaderSimple } from "../components/header";
import { Routes, Route } from "react-router-dom";
import DAO from "./DAO/DAO";
import Home from "./Home";
import About from "./About/About";
import Events from "./Events";
import StoreFront from "./StoreFront/StoreFront";

import Deploy from "./DAO/deploy";
import Lock from "./DAO/lock";

import Calc from "./DAO/calc";
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
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Courier",
        fontFamilyMonospace: " Courier",
        headings: {
          fontFamily: "Courier New",
          sizes: {
            h1: { fontWeight: 100, fontSize: 32, lineHeight: 1.4 },
            h2: { fontSize: 28, lineHeight: 1.5 },
            // ...up to h6
            h6: { fontWeight: 900 },
          },
        },
        colorScheme: "dark",
      }}
    >
      <MantineProvider inherit>
        <HeaderSimple links={link}></HeaderSimple>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DAO" element={<DAO />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/DAO/deploy" element={<Deploy />} />
          <Route path="/DAO/deploy/lock" element={<Lock />} />
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
