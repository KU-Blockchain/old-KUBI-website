import * as React from "react";
import { Group, Text } from "@mantine/core";
import { BioCard } from "../components/bioCard";
import jayhawk from "./jayhawk-4.png";

const bios = {
  emma: "this is emma's bio",
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
        <Group position="center" spacing="lg" grow style={{ marginTop: 30 }}>
          <BioCard
            avatar={jayhawk}
            name={"Dr. Perry Alexander"}
            email={"email"}
            job={"Faculty Sponsor"}
            bioText={bios.perry}
          ></BioCard>
          <BioCard
            avatar={jayhawk}
            name={"Dr. Jennifer Lohoefener"}
            email={"eemail"}
            job={"Faculty Sponsor"}
            bioText={bios.jennifer}
          ></BioCard>
          <BioCard
            avatar={jayhawk}
            name={"Emma Nasseri"}
            email={"enasseri02@ku.edu"}
            job={"President"}
            bioText={bios.emma}
          ></BioCard>
        </Group>
        <Group position="center" spacing="lg" grow style={{ marginTop: 30 }}>
    
          <BioCard
            avatar={"avatar"}
            name={"Johnathon Lemons"}
            email={"email address"}
            job={"Vice President of Business"}
            bioText={bios.johnathon}
          ></BioCard>
          <BioCard
            avatar={"avatar"}
            name={"Hudson Headley"}
            email={"hudsonh@ku.edu"}
            job={"Vice President of Engineering"}
            bioText={bios.hudson}
          ></BioCard>
          <BioCard
            avatar={"avatar"}
            name={"Hannah Smith"}
            email={"email address"}
            job={"Director of Education"}
            bioText={bios.hannah}
          ></BioCard>
        </Group>
        <Group position="center" spacing="lg" grow style={{ marginTop: 30 }}>
          <BioCard
            avatar={"avatar"}
            name={"Bisshoy Bhattacharjee"}
            email={"email address"}
            job={"Executive Intern"}
            bioText={bios.bisshoy}
          ></BioCard>
          <BioCard
            avatar={"avatar"}
            name={"Payden Brunton"}
            email={"email address"}
            job={"Director of Research and Education"}
            bioText={bios.payden}
          ></BioCard>
          <BioCard
            avatar={"avatar"}
            name={"Keanen Inthavongsa"}
            email={"email address"}
            job={"Director of Content Creation"}
            bioText={bios.keanen}
          ></BioCard>
        </Group>
      </div>
    </>
  );
};

export default About;
