import { Box, List, Text, Title } from "@mantine/core";

type Props = {};

const UnitContent = (props: Props) => {
  return (
    <>
      <Box>
        <Text c="#0ea5e9" fz="md" fw="bold" mb="md" mt="md">
          Week 0 - 1 (Unit 1.0)
        </Text>
        <Title order={4}>Programming Basics</Title>
        <List size="lg" withPadding mt="md" listStyleType="disc">
          <List.Item fz="md">Introduction</List.Item>
          <List.Item fz="md">Installation</List.Item>
          <List.Item fz="md">Basic Program</List.Item>
        </List>
      </Box>
      <Box mt="md">
        <Title order={4}>Basics - I</Title>
        <List size="lg" withPadding mt="md" listStyleType="disc">
          <List.Item fz="md">Sample Program</List.Item>
          <List.Item fz="md">Syntax</List.Item>
          <List.Item fz="md">Data structure and algorithm</List.Item>
        </List>
      </Box>
    </>
  );
};

export default UnitContent;
