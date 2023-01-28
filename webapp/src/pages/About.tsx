import * as React from "react";
import { Group, Text } from "@mantine/core";
import { BioCard } from "../components/bioCard";
import jayhawk from "./jayhawk-4.png";

const bios = {
  emma: "Emma Nasseri is a Junior majoring in Computer Science and minoring in Visual Arts. She has been involved with the KU Blockchain Institute since 2021 and is so grateful for the learning opportunities and welcoming community that KUBI has offered. Emma is hopeful about a decentralized future and is specifically interested in DAOs and NFTs. She believes blockchain has the power to make technology more just and equitable for all. ",
  hudson: "this is hudson's bio",
  johnathon: "this is johnathon's bio",
  hannah: "this is hannah's bio",
  payden: "this is payden's bio",
  keanen: "this is Keanen's bio",
  bisshoy: "this is bisshoy's bio",
  perry: "this is perry's bio",
  jennifer: "This is jennifer's bio",
};

const About = () => {
  return (
    <>
      <div
        style={{
          flexDirection: "row",
          marginLeft: 50,
          marginRight: 50,
        }}
      >
        <Text align="center" size="xl" weight={700} mt="md">
          Meet the Team
        </Text>
        /*
        These are the bio cards for the team. The group components define how they are grouped into rows.
        Each BioCard component is being passed the appropriate props. 
        
        */
        <Group position="center" spacing="lg" grow style={{ marginTop: 30 }}>
          <BioCard
            avatar={jayhawk}
            name={"Dr. Perry Alexander"}
            email={"email"}
            job={"Faculty Sponsor"}
            bioText={bios.perry}
            contactMethod={"Personal Website"}
          ></BioCard>
          <BioCard
            avatar={jayhawk}
            name={"Dr. Jennifer Lohoefener"}
            email={"eemail"}
            job={"Faculty Sponsor"}
            bioText={bios.jennifer}
            contactMethod={"Personal Website"}
          ></BioCard>
          <BioCard
            avatar={jayhawk}
            name={"Emma Nasseri"}
            email={"enasseri02@ku.edu"}
            job={"President"}
            bioText={bios.emma}
            contactMethod={"Connect"}
          ></BioCard>
        </Group>
        <Group position="center" spacing="lg" grow style={{ marginTop: 30 }}>
    
          <BioCard
            avatar={"avatar"}
            name={"Johnathon Lemons"}
            email={"email address"}
            job={"Vice President of Business"}
            bioText={bios.johnathon}
            contactMethod={"Connect"}
          ></BioCard>
          <BioCard
            avatar={"avatar"}
            name={"Hudson Headley"}
            email={"hudsonh@ku.edu"}
            job={"Vice President of Engineering"}
            bioText={bios.hudson}
            contactMethod={"Connect"}
          ></BioCard>
          <BioCard
            avatar={"avatar"}
            name={"Hannah Smith"}
            email={"email address"}
            job={"Director of Education"}
            bioText={bios.hannah}
            contactMethod={"Connect"}
          ></BioCard>
        </Group>
        <Group position="center" spacing="lg" grow style={{ marginTop: 30 }}>
          <BioCard
            avatar={"avatar"}
            name={"Bisshoy Bhattacharjee"}
            email={"email address"}
            job={"Executive Intern"}
            bioText={bios.bisshoy}
            contactMethod={"Connect"}
          ></BioCard>
          <BioCard
            avatar={"avatar"}
            name={"Payden Brunton"}
            email={"email address"}
            job={"Director of Research and Education"}
            bioText={bios.payden}
            contactMethod={"Connect"}
          ></BioCard>
          <BioCard
            avatar={"avatar"}
            name={"Keanen Inthavongsa"}
            email={"email address"}
            job={"Director of Content Creation"}
            bioText={bios.keanen}
            contactMethod={"Connect"}
          ></BioCard>
        </Group>
      </div>
    </>
  );
};

export default About;
