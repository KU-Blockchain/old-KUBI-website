import {
  Group,
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
} from "@mantine/core";

import React from "react";
import { IconCoin } from "@tabler/icons";

const mockdata = [
  { title: "Crypto", icon: IconCoin, color: "violet", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
  { title: "Supply Chain", icon: IconCoin, color: "indigo", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
  { title: "Art", icon: IconCoin, color: "blue", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
  { title: "Education", icon: IconCoin, color: "green", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
  { title: "Social Media", icon: IconCoin, color: "teal", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
  { title: "Digital Identity", icon: IconCoin, color: "cyan", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
  { title: "Voting", icon: IconCoin, color: "pink", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
  { title: "Payments", icon: IconCoin, color: "red", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
  { title: "Something else", icon: IconCoin, color: "orange", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
  { title: "application", icon: IconCoin, color: "pink", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
  { title: "application", icon: IconCoin, color: "red", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
  { title: "The Environment", icon: IconCoin, color: "orange", link: "https://www.notion.so/Start-Here-266f5ea2b2ea4f5a990f869d52dfa6bc" },
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
}));

export function ActionsGrid() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item} component="a" href={item.link}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="sm" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <div style={{marginLeft: 40, marginRight: 40}}>
      <Card withBorder radius="md" className={classes.card}>
        <Group position="apart">
          <Text className={classes.title} size="xl" weight="400">
            Applications of Blockchain Technology
          </Text>
          <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
            + many others
          </Anchor>
        </Group>
        <Text style={{ marginTop: 5, marginBottom: 5 }}>
          Click any tile to learn more.
        </Text>
        <SimpleGrid cols={4} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    </div>
  );
}
