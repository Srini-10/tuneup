import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import Banner from "../assets/lebel-banner.svg";
import Info from "../assets/info.svg";

type Props = {};

const Advertisement = (props: Props) => {
  return (
    <Flex w="90%" justify="center" m="auto" gap="lg" pt="xl">
      <Flex justify="center" m="auto" align="center">
        <Container w="50%">
          <img src={Banner} style={{ height: "35px" }} />
          <Title order={1} ta="left" lh="sm" mt="md">
            Professional and
            <br /> Lifelong Learning <br />
            Comes Here
          </Title>
          <Text c="#4A4D45" ta="left" lh="xl" fz="xl" mt="md">
            Live tech bootcamps and online classes to <br />
            kickstart or accelerate your career
          </Text>
          <Group justify="flex-start" mt="xl">
            <Button variant="outline" color="gray" radius="xl">
              Get started
            </Button>
            <Button variant="filled" color="lime" radius="xl">
              Explore Courses
            </Button>
          </Group>
        </Container>
        <Container w="50%">
          <Image src={Info} />
        </Container>
      </Flex>
    </Flex>
  );
};

export default Advertisement;
