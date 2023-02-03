import React from "react";
import { KUBITitleAnimation } from "../components/KUBITitleAnimation";
import jayhawk from "./jayhawk-4.png";
import { CardsCarousel } from "../components/carousel";
import { Group, Text, Title, Box, Grid } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <>
     <div style={{height: 60}}></div>
      <KUBITitleAnimation></KUBITitleAnimation>

      <div>i want to put a scrolling banner here</div>
      <Group position="center" spacing="lg"  style={{ marginTop: 30 }}>
        <img src={jayhawk} alt="" width="auto" height="auto" />
        <Box style={{width: 500, height: 500}}>
          <Title order={2}  weight={700}>Who We Are</Title>
          <Text size="lg">
          The University of Kansas Blockchain Institute is a student-led technology initiative established under the Institute for Information Sciences (I2S). 
          We strive to make Lawrence the technology hub of the Midwest through the interdisciplinary research, education, and development of distributed ledger technologies at KU. 
          </Text>
        </Box>
      </Group>
      <CardsCarousel />
      <div>
        putting something here for a test
      </div>
    </>
  );
};

export default Home;
