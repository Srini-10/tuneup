import { Box, Flex, Text, Title } from "@mantine/core";
import Lottie from "lottie-react";
import fotterAnimation from "../assets/footer.json";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <Flex mt="xl" p="xl" justify="space-evenly" align="center" mb="xl">
        <Box ta="left">
          <Title order={2} mb="md">
            Let there be change
          </Title>
          <Title order={4}>Preference Centre</Title>
          <Box mt="md">
            <Text fz="md">Careers</Text>
            <Text fz="md">About Us</Text>
            <Text fz="md">Contact Us</Text>
            <Text fz="md">Locations</Text>
          </Box>
          <Title order={4} mt="md">
            Sitemap
          </Title>
          <Box mt="md">
            <Text fz="md">Privacy Statement</Text>
            <Text fz="md">Terms & Conditions</Text>
            <Text fz="md">Cookie Policy Settings</Text>
            <Text fz="md">Accessibility Statement</Text>
          </Box>
          <Title order={5} mt="md">
            © 2024 TuneUp. All Rights Reserved.
          </Title>
        </Box>
        <Box w="30%">
          <Lottie animationData={fotterAnimation} loop={true} />
        </Box>
      </Flex>
    </>
  );
};
export default Footer;
