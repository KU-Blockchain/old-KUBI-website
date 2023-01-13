import * as React from "react";
import { BioCard } from "../components/bioCard";

const About = () => {
  return (
    <>
      <div>About</div>
      <BioCard avatar={'avatar'} name={"Emma Nasseri"} email="enasseri02@ku.edu" job={'President'}></BioCard>
    </>
  );
};

export default About;
