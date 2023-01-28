import * as React from "react";
import { Group, Text } from "@mantine/core";

import jayhawk from "./jayhawk-4.png";




const StoreFront = () => {
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
        <Text align="center" size="xl" weight={700} mt="md">
          Meet the Team
        </Text>
      
    
        
      </div>
    </>
  );
};

export default StoreFront;
