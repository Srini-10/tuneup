import { Box, Flex, Text, Title } from "@mantine/core";
import Certificate from "../assets/certification.png";

type Props = {};

const Certification = (props: Props) => {
  return (
    <>
      <Flex
        p="xl"
        h="500px"
        align="center"
        mt="30px"
        w="90%"
        justify="center"
        m="auto"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
        }}
      >
        <Box w="50%">
          <img
            src={Certificate}
            style={{ height: "420px", width: "100%" }}
            alt=""
          />
        </Box>
        <Box w="50%">
          <Title order={2} c="#0ea5e9">
            Certification Details
          </Title>
          <Box p="xl" ta="left">
            <Text fz="xl" fw="normal">
              TuneUp Certificate is a prestigious identification who have
              successfully completed their training.
            </Text>
            <br />
            <Text fz="xl" fw="normal">
              TuneUp Certificate symbolize a successful journey of learning,
              growth and accomplishments, showcasing outstanding performance and
              dedication of the practical skills a candidate can acquire in
              their learning.
            </Text>
            <br />
            <Text fz="xl" fw="normal">
              TuneUp Certificates are accepted widely accepted and rewarding
              carrer opportunity and personal growth
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Certification;
