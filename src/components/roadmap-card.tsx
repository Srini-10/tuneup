import { Box, Flex, Image, List, Text, Title } from "@mantine/core";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import JS from "../assets/javascript.svg";
import Lottie from "lottie-react";
import reactAnimation from "../assets/react-animation.json";
import UnitTabs from "./unit-tabs";

type Props = {};

const RoadmapCard = (props: Props) => {
  // const computedColorScheme = useComputedColorScheme("light", {
  //   getInitialValueInEffect: true,
  // });
  return (
    <>
      <Flex
        justify="space-between"
        w="90%"
        h={500}
        m="auto"
        p="xl"
        mt="md"
        align="center"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
        }}
      >
        <Box ta="left" lh="sm">
          <Box h={80}>
            <Title order={2} c="#0ea5e9">
              1. Get into the course
            </Title>
          </Box>
          <Box>
            <Title order={3}>Full Stack Web Developer Course</Title>
            <Text mt="md" w="80%" fz="xl" fs="bold">
              Master the skills required to thrive in the dynamic realm of full
              stack web development. Engage in immersive hands-on projects, all
              under the guidance of student experts. Elevate your career
              opportunities today.
            </Text>
            <List size="lg" withPadding mt="md" listStyleType="disc">
              <List.Item fw="bolder" fz="md">
                Full stack web development course 30Hours (5 weeks)
              </List.Item>
              <List.Item fw="bolder" fz="md">
                What you'll learn
              </List.Item>
            </List>
            <Flex p="xl" gap="xl">
              <Image src={HTML} h="50px" w="50px" />
              <Image src={CSS} h="50px" w="50px" />
              <Image src={JS} h="50px" w="50px" />
            </Flex>
          </Box>
        </Box>
        <Box w="50%">
          <Lottie animationData={reactAnimation} loop={true} />
        </Box>
      </Flex>
      <Flex
        justify="space-between"
        w="90%"
        h={500}
        m="auto"
        p="xl"
        align="center"
        style={{
          boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
        }}
      >
        <Box w="100%" ta="left">
          <Box>
            <Title order={2} c="#0ea5e9">
              2. Course Curriculum
            </Title>
            <UnitTabs />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default RoadmapCard;
