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
      <Flex h={480} w="100%" bg="#101828" mt="xl">
        <Box p="md" w="20%">
          <Image src={Logo} />
          <Text c="#EAECF0" size="md" h={100}>
            Top learning experiences that create more talent in the world.
          </Text>
          <Text c="#98A2B3">© 2024 Ed-Circle. All rights reserved.</Text>
        </Box>
        <Box p="md" w="20%" mt={50}>
          <Text c="#98A2B3" mb="md">
            Product
          </Text>
          <Text c="#EAECF0" mb="md">
            Overview
          </Text>
          <Text c="#EAECF0" mb="md">
            Features
          </Text>
          <Text c="#EAECF0" mb="md">
            Pricing
          </Text>
        </Box>
        <Box p="md" w="20%" mt={50}>
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
        </Box>
        <Box p="md" w="20%" mt={50}>
          <Text c="#98A2B3" mb="md">
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
            Terms
          </Text>
          <Text c="#EAECF0" mb="md">
            Privacy
          </Text>
          <Text c="#EAECF0" mb="md">
            Contact
          </Text>
        </Box>
        <Flex justify="flex-end" align="end" gap="xl" p={30}>
          <Image src={twitter} h={30} w={30} />
          <Image src={linkedin} h={30} w={30} />
          <Image src={facebook} h={30} w={30} />
          <Image src={github} h={30} w={30} />
        </Flex>
      </Flex>
    </>
  );
};

export default InternFooter;
