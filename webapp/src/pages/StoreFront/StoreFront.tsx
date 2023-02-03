import * as React from "react";
import { Group, Text, Grid, Container } from "@mantine/core";
import blackTee from "./merchImages/BlackTee.png";
import colorfulTee from "./merchImages/ColorfulTee.png";
import waterBottle from "./merchImages/WaterBottle.png";
import crewNeck from "./merchImages/WhiteCrewneck.png";
import jayhawk from "./jayhawk-4.png";
import { ProductCard } from "../../components/productCard";
import { FaqSimple } from "../../components/FAQs";

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
          Redeem Your KUBIX
        </Text>
        <Grid>
          <Grid>
            
              <ProductCard
                frontImage={blackTee}
                title={"Black Tee"}
                price={"20,000 KUBIX"}
                year={"2022"}
              ></ProductCard>
              <ProductCard
                frontImage={colorfulTee}
                title={"White Tee"}
                price={"20,000 KUBIX"}
                year={"2022"}
              ></ProductCard>
            
            
              <ProductCard
                frontImage={waterBottle}
                title={"Waterbottle"}
                price={"20,000 KUBIX"}
                year={"2022"}
              ></ProductCard>
              <ProductCard
                frontImage={crewNeck}
                title={"Classic White Crewneck"}
                price={"20,000 KUBIX"}
                year={"2022"}
              ></ProductCard>
            
          </Grid>
          <Container>
            <FaqSimple></FaqSimple>
          </Container>
        </Grid>
      </div>
    </>
  );
};

export default StoreFront;
