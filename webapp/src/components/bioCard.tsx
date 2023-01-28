import { Avatar, Text, Button, Paper, HoverCard, Box } from "@mantine/core";
import React from "react";

interface IbioCardProps {
  avatar: string;
  name: string;
  email: string;
  job: string;
  bioText: string;
}

export const BioCard: React.FC<IbioCardProps> = (props: IbioCardProps) => {
  return (
    <HoverCard>
      <HoverCard.Target>
        <Paper
          radius="md"
          withBorder
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

          <Button variant="default" fullWidth mt="md">
            Send message
          </Button>

          
        </Paper>
      </HoverCard.Target>
      <HoverCard.Dropdown>
          <Text size="sm">
            {props.bioText}
          </Text>
        </HoverCard.Dropdown>
    </HoverCard>
  );
};

/*<Box
sx={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 60,
  height: 60,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#dee2e6",
  borderStyle: "solid",
  backgroundColor: "#fff",
  cursor: "pointer",
}}
>
<Text size="sm" weight="bold">
  bio text
</Text>
</Box>
*/