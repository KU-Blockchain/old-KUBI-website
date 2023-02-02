import {
  UnstyledButton,
  Card,
  Paper,
  Image,
  Text,
  Title,
  Button,
  Group,
} from "@mantine/core";
import { filterProps } from "framer-motion";
import React from "react";

interface IcardProps {
  title: string;
  image: string;
  description: string;
}

export const SimpleCard: React.FC<IcardProps> = (props: IcardProps) => {
  return (
    <UnstyledButton>
      <Paper
        radius="lg"
        withBorder
        p="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
        <div style={{ width: 240, height: 400, marginLeft: "auto", marginRight: "auto", marginBottom:40}}>
          <Image src={props.image} alt="Image" />
        </div>
        <Title align="center"order={2}>
          {props.title}
        </Title>

        <Text size="md" align="center" color="dimmed">
          {props.description}
        </Text>
      </Paper>
    </UnstyledButton>
  );
};
