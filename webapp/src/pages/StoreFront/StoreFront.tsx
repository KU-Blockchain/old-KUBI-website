import * as React from "react";
import { Group, Text, SimpleGrid, Container, Button } from "@mantine/core";
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
        <Group  position="center" style={{marginBottom:30}}>
      
        <Button component="a" href= "/DAO/deploy">Click here to connect metamask</Button>
        </Group>
        <SimpleGrid cols={2}>
          <Container>
            <Group>
              <ProductCard
                frontImage={blackTee}
                title={"Black Tee"}
                price={"20,000 KUBIX"}
                year={"2022"}
                status={"In Stock"}
              ></ProductCard>
              <ProductCard
                frontImage={colorfulTee}
                title={"White Tee"}
                price={"20,000 KUBIX"}
                year={"2022"}
                status={"In Stock"}
              ></ProductCard>
            </Group>
            <Group>
              <ProductCard
                frontImage={blackTee}
                title={"Black Tee"}
                price={"20,000 KUBIX"}
                year={"2022"}
                status={"In Stock"}
              ></ProductCard>
              <ProductCard
                frontImage={colorfulTee}
                title={"White Tee"}
                price={"20,000 KUBIX"}
                year={"2022"}
                status={"In Stock"}
              ></ProductCard>
            </Group>
          </Container>

          <FaqSimple></FaqSimple>
        </SimpleGrid>
      </div>
    </>
  );
};

export default StoreFront;
