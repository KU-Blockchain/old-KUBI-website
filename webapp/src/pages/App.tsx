import React from "react";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "../components/header";
import { Routes, Route} from "react-router-dom";
import DAO from "./DAO";
import Home from "./Home";
import About from "./About";
import Events from "./Events";
import theme from "./theme";

const link = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/events", label: "Events"},
  { link: "/DAO", label: "DAO" },
];
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <HeaderSimple links={link}></HeaderSimple>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DAO" element={<DAO />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </MantineProvider>
  );
}

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
