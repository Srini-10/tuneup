import React from "react";
import { Box, Text, Title } from "@mantine/core"; // Import necessary components
import { Carousel } from "@mantine/carousel"; // Import Carousel component
import { useMantineTheme } from "@mantine/core"; // Import useMantineTheme hook
import { useMediaQuery } from "@mantine/hooks"; // Import useMediaQuery hook
import ProgramCard from "./program-card";
import DigitalMarketing from "../../assets/Digital Marketing.jpg"; // Update import paths
import WebDevelopment from "../../assets/WebDevelopment.jpg"; // Update import paths
import Python from "../../assets/python.png";
import Mysql from "../../assets/mysql.png";
import AppDevelopment from "../../assets/AppDevelopment.jpg";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import classes from "./Demo.module.css";

type Props = {};

const Programs = (props: Props) => {
  const theme = useMantineTheme(); // Use useMantineTheme hook inside the component
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`); // Use useMediaQuery hook inside the component

  return (
    <>
      <Box p="xl" m="auto" w="96%">
        <Text c="#60a5fa" size="md" fw={600}>
          Explore Programs
        </Text>
        <Title order={1} mt="md">
          Our Most Popular Class
        </Title>
        <Text c="#667085" size="sm" mt="md">
          Let's join our famous class, the knowledge provided will definitely be
          useful for you.
        </Text>
        <Carousel
          height={430}
          w="100%"
          align="center"
          loop
          classNames={classes}
          slidesToScroll={mobile ? 1 : 1}
          slideSize={{ base: "20%", md: "50%", sm: "50%", lg: "10%" }}
          slideGap={{ base: "lg", sm: 10, md: 20, lg: 30 }}
          nextControlIcon={
            <IconArrowRight style={{ width: "16", height: "16" }} />
          }
          previousControlIcon={
            <IconArrowLeft style={{ width: "16", height: "16" }} />
          }
        >
          <Carousel.Slide style={{ marginLeft: "10px" }}>
            <ProgramCard
              imageSrc={WebDevelopment}
              duration="45Days (67Hrs)"
              title="Frontend Development"
              content="Frontend web development involves creating the visible and interactive aspects of websites."
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <ProgramCard
              imageSrc={AppDevelopment}
              duration="45Days (67Hrs)"
              title="Application Developer"
              content="Application development involves designing, building, and maintaining software applications for various platforms."
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <ProgramCard
              imageSrc={Python}
              duration="45Days (67Hrs)"
              title="Python Programming"
              content="Python is a high-level, interpreted programming language known for its simplicity, versatility, and readability."
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <ProgramCard
              imageSrc={Mysql}
              duration="45Days (67Hrs)"
              title="MySQL Database"
              content="It is an open-source relational database management system used for storing, organizing, and retrieving data efficiently."
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <ProgramCard
              imageSrc={DigitalMarketing}
              duration="45Days (67Hrs)"
              title="Digital Marketing"
              content="Digital marketing encompasses all online strategies and tactics used to promote products or services."
            />
          </Carousel.Slide>
        </Carousel>
      </Box>
    </>
  );
};

export default Programs;
