import { Avatar, Text, Button, Paper } from '@mantine/core';
import React from 'react';


interface IbioCardProps {
  avatar: string;
  name: string;
  email: string;
  job: string;
}


export const BioCard: React.FC<IbioCardProps> = (props: IbioCardProps) =>{
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={props.avatar} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        {props.name} 
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {props.email} • {props.job}
      </Text>

      <Button variant="default" fullWidth mt="md">
        Send message
      </Button>
    </Paper>
  );
}