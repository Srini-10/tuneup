import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import ServiceCard from "./service-card";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <Box mt="xl">
        <Text c="#60a5fa" size="md" fw={600}>
          Our Services
        </Text>
        <Title order={1} mt="md">
          Fostering a playful & engaging learning <br />
          environment
        </Title>
        <Flex w="95%" justify="center" align="center" gap="md" m="auto" p="md">
          <ServiceCard
            title="Interaction Design"
            content="Lessons on design that cover the most recent developments."
          />
          <ServiceCard
            title="UX Design Course"
            content="Classes in development that cover the most recent advancements in web."
          />
          <ServiceCard
            title="User Interface Design"
            content="User Interface Design courses that cover the most recent  trends"
          />
          <ServiceCard
            title="User Interface Design"
            content="User Interface Design courses that cover the most recent  trends"
          />
        </Flex>
      </Box>
    </>
  );
};

export default Services;
