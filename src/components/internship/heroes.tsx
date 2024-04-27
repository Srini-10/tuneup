import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import HeroesCard from "./heroes-card";
import avatar from "../../assets/avatar.svg";

type Props = {};

const Heroes = (props: Props) => {
  return (
    <>
      <Box mt="xl">
        <Text c="#60a5fa" size="md" fw={600}>
          Tutors
        </Text>
        <Title order={1} mt="md">
          Meet the Heroes
        </Title>
        <Text c="#667085" size="sm" mt="md">
          On Weekend UX, instructors from all over the world instruct millions
          of students. We offer the knowledge and abilities.
        </Text>
        <Flex justify="center" m="auto" mt="xl">
          <HeroesCard
            imageSrc={avatar}
            name="Sairam Senthil"
            role="Founder & MySQL Trainer"
            experience="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
          />
          <HeroesCard
            imageSrc={avatar}
            name="Pradeep Muthu"
            role="CEO & Technical Trainer"
            experience="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
          />
          <HeroesCard
            imageSrc={avatar}
            name="Monishwaran K"
            role="Technical Trainer & Software Developer"
            experience="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
          />
          <HeroesCard
            imageSrc={avatar}
            name="Srinivasan P"
            role="Technical Trainer & Frontend Developer"
            experience="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
          />
        </Flex>
      </Box>
    </>
  );
};

export default Heroes;
