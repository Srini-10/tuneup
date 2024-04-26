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
            title="Frontend Development"
            content="Frontend web development involves creating the visible and interactive aspects of websites."
          />
          <ServiceCard
            title="Application Development"
            content="
            Application development involves designing, building, and maintaining software applications for various platforms."
          />
          <ServiceCard
            title="MySQL Database"
            content="
            It is an open-source relational database management system used for storing, organizing, and retrieving data efficiently."
          />
          <ServiceCard
            title="Digital Marketing"
            content="Digital marketing encompasses all online strategies and tactics used to promote products or services."
          />
        </Flex>
      </Box>
    </>
  );
};

export default Services;
