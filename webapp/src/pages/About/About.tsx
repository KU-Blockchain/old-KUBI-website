import * as React from "react";
import { Group, Title, Grid, Image, UnstyledButton, Avatar, Text} from "@mantine/core";
import jayhawk from "./jayhawk-4.png";
import { Routes, Route } from "react-router-dom";
import { ClickableCard } from "../../components/clickableCard";
import AboutKUBI from "./AboutKUBI";
import AboutBlockchain from "./AboutBlockchain";
import campusLineArt from "../components/reusableImages/campusLineArtEdited.png";


const About = () => {
  return (
    /*
        These are the bio cards for the team. The group components define how they are grouped into rows.
        Each BioCard component is being passed the appropriate props. 

        */
    <>
   
      <div
        style={{
          flexDirection: "row",
          marginLeft: 50,
          marginRight: 50,
        }}
      >
        <Group position="center" spacing="lg" grow style={{ marginTop: 30 }}>
          <ClickableCard
            title={"About the KU Blockchain Institute"}
            image={jayhawk}
            description={"Click to learn about our mission, team, and history."}
            link={"/aboutKUBI"}
          ></ClickableCard>
          <ClickableCard
            title={"About Blockchain Technology"}
            image={jayhawk}
            description={"Click to learn more about the technology that makes us tick."}
            link={"/aboutBlockchain"}
          ></ClickableCard>
        </Group>

      
      </div>
    </>
  );
};

export default About;
