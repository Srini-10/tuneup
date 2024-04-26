import { Box, Flex, Image, Text } from "@mantine/core";
import Logo from "../../assets/tuneup-logo-dark.png";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";

type Props = {};

const InternFooter = (props: Props) => {
  return (
    <>
      <Flex h={290} w="100%" pl={70} pr={70} bg="#101828" mt="50">
        <Box p="md" mt={50} w="30%">
          <Image w="70%" src={Logo} />
          <Text c="#EAECF0" mt="xl" style={{textAlign: "justify"}} size="md" h={100}>
            Top learning experiences that create more talent in the world.
          </Text>
        </Box>
        <Box p="md" w="20%" mt={50}>
          <Text c="#98A2B3" mb="md">
            Product
          </Text>
          <Text c="#EAECF0" mb="md">
            Overview
          </Text>
          <Text c="#EAECF0" mb="md">
            Courses
          </Text>
          <Text c="#EAECF0" mb="md">
            Features
          </Text>
          <Text c="#EAECF0" mb="md">
            Pricing
          </Text>
        </Box>
        <Box p="sm" w="20%" mt={50}>
          <Text c="#98A2B3" mb="md">
            Company
          </Text>
          <Text c="#EAECF0" mb="md">
            About us
          </Text>
          <Text c="#EAECF0" mb="md">
            Carrers
          </Text>
          <Text c="#EAECF0" mb="md">
            News
          </Text>
          <Text c="#EAECF0" mb="md">
            Vision & Mission
          </Text>
        </Box>
        <Box p="md" w="20%" mt={50}>
          <Text c="#98A2B3" mb="md" className="font-extrabold">
            Social
          </Text>
          <Text c="#EAECF0" mb="md">
            Twitter
          </Text>
          <Text c="#EAECF0" mb="md">
            LinkedIn
          </Text>
          <Text c="#EAECF0" mb="md">
            GitHub
          </Text>
          <Text c="#EAECF0" mb="md">
            Youtube
          </Text>
        </Box>
        <Box p="md" w="20%" mt={50}>
          <Text c="#98A2B3" mb="md">
            Legal
          </Text>
          <Text c="#EAECF0" mb="md">
            Terms & Conditions
          </Text>
          <Text c="#EAECF0" mb="md">
            Privacy & Policy
          </Text>
          <Text c="#EAECF0" mb="md">
            Contact Us
          </Text>
        </Box>
      </Flex>

      <Flex justify="space-between" pb={60} pl={70} pr={70} align="center" bg="#101828" p={30}>
        <Text c="#98A2B3">© 2024 Ed-Circle. All rights reserved.</Text>
        <Flex gap={25}>
        <Image src={twitter} h={25} w={25} />
        <Image src={linkedin} h={25} w={25} />
        <Image src={facebook} h={25} w={25} />
        <Image src={github} h={25} w={25} />
        </Flex>
      </Flex>
    </>
  );
};

export default InternFooter;
