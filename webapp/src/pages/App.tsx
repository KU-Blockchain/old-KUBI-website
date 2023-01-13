import React from "react";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "../components/header";
import { Routes, Route, Link } from "react-router-dom"
import DAO from './DAO'
import Home from './Home'
import About from './About'


const link = [{ link: "/", label: "Home" },{ link: "/DAO", label: "DAO" }, { link: "/About", label: "About" }];
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <HeaderSimple links={link}></HeaderSimple>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DAO" element={<DAO />} />
            <Route path="/About" element={<About />} />
        </Routes>
    </MantineProvider>
  );
}

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
