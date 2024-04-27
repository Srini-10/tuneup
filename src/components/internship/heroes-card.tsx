import { Box, Flex, Image, Text } from "@mantine/core";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

type Props = {
  imageSrc: any;
  name: string;
  role: string;               
  experience: string;                                     
};

const HeroesCard = ({ imageSrc, name, role, experience }: Props) => {
  return (
    <>
      <Box
        h={400}
        w={270}
        bg="#F9FAFB"
        p="xl"
        ml="xl"
        style={{ borderRadius: 10 }}
      >
        <Flex
          justify="center"
          m="auto"
          direction="column"
          align="center"
          gap="md"
        >
          <Image src={imageSrc} h={80} w={80} />
          <Text fw={500} size="md">
            {name}
          </Text>
          <Text fw={500} size="md" c="#60a5fa">
            {role}
          </Text>
          <Text fw={500} size="md" c="#667085">
            {experience}
          </Text>
          <Flex gap="lg">
            <Image src={twitter} />
            <Image src={linkedin} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default HeroesCard;
