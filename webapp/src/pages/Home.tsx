import React from "react";
import { KUBITitle } from "../components/KUBITitle";
import jayhawk from "./jayhawk-4.png";
import { CardsCarousel } from "../components/carousel";
import { Group, Text, Paper } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <>
      <div>i want to put a scrolling banner here</div>
      <KUBITitle></KUBITitle>
      <Group>
        <img src={jayhawk} alt="" width="500" height="500" />
        <Paper shadow="xs" p="md">
          <Text size="xl" weight={700}>Who We Are</Text>
          <Text size="lg">
          The University of Kansas Blockchain Institute is a student-led technology initiative established under the Institute for Information Sciences (I2S). 
          We strive to make Lawrence the technology hub of the Midwest through the interdisciplinary research, education, and development of distributed ledger technologies at KU. 
          </Text>
        </Paper>
      </Group>
      <CardsCarousel />
      <div>
        putting something here for a test
      </div>
    </>
  );
};

export default Home;
