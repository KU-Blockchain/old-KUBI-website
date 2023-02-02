import React from "react";
import { MantineProvider, Text } from "@mantine/core";
import { HeaderSimple } from "../components/header";
import { Routes, Route } from "react-router-dom";
import DAO from "./DAO";
import Home from "./Home";
import About from "./About";
import Events from "./Events";
import StoreFront from "./StoreFront";
import theme from "./theme";
import Deploy from "./deploy";
import AboutKUBI from "./AboutKUBI";
import AboutBlockchain from "./AboutBlockchain";

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
        <Route path="/DAO" element={<DAO />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/DAO/deploy" element={<Deploy />} />
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
