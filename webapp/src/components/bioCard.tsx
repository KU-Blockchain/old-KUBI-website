import { Avatar, Text, Button, Paper, HoverCard, Box } from "@mantine/core";
import React from "react";

interface IbioCardProps {
  avatar: string;
  name: string;
  email: string;
  job: string;
  bioText: string;
  contactMethod: string;
}

export const BioCard: React.FC<IbioCardProps> = (props: IbioCardProps) => {
  return (
    /*
    The HoverCard component defines the functionality that when a mouse hovers over the BioCard, a block of text appears.
    HoverCard.Target displays what the target hover area is. In this case, it's the Paper component. 
    */
    <HoverCard>
      <HoverCard.Target>
        <Paper
          radius="sm"
          
          p="lg"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
          })}
        >
          <Avatar src={props.avatar} size={120} radius={120} mx="auto" />
          <Text align="center" size="lg" weight={700} mt="md">
            {props.name}
          </Text>
          <Text align="center" size="sm">
            {props.job} • {props.email}
          </Text>

          <Button
            variant="default"
            fullWidth
            mt="md"
            component="a"
            href={"https://www.linkedin.com/in/emma-nasseri/"}
          >
            {props.contactMethod}
          </Button>
        </Paper>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Text size="sm">{props.bioText}</Text>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};
