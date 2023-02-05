import {
  UnstyledButton,
  Card,
  Paper,
  Image,
  Text,
  Title,
  Button,
  BackgroundImage,
  Group,
} from "@mantine/core";
import { useHover } from '@mantine/hooks';
import { filterProps } from "framer-motion";
import circuits from "./reusableImages/circuits.png"
import React from "react";

interface IcardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

export const ClickableCard: React.FC<IcardProps> = (props: IcardProps) => {
  const { hovered, ref } = useHover();
  return (
    <UnstyledButton component="a" href={props.link} >
       
      <div ref={ref}>
      <Card

      shadow="sm"
        radius="lg"
        
        p="lg"
        
      >
        <BackgroundImage src={circuits} style={{opacity: hovered ? 100 : 10}} >
        <div style={{ width: 240, height: 400, marginLeft: "auto", marginRight: "auto", marginBottom:40}}>
          <Image src={props.image}  alt="Image" />
          
        </div>
        <Title align="center"order={2}>
          {props.title}
        </Title>

        <Text size="lg" align="center" color="dimmed">
          {props.description}
        </Text>
        </BackgroundImage>
      </Card>
      </div>
  
    </UnstyledButton>
  );
};

/*
sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
            
        })}
        */