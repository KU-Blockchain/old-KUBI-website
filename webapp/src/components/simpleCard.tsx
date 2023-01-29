import { UnstyledButton, Card, Paper, Image, Text, Button, Group } from "@mantine/core";
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
      
        radius="md"
        withBorder
        p="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
        <Image src={props.image} height={160} alt="Image" />

        <Text align="center" weight={500} size="xl">{props.title}</Text>

        <Text size="md" align="center" color="dimmed">
          {props.description}
        </Text>
      </Paper>
      </UnstyledButton>

  );
};
