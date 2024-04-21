import { Box, Button, Flex, Text, Title, Image } from "@mantine/core";
import getStartLabel from "../../assets/get-start-label.svg";

type Props = {};

const GetStartText = (props: Props) => {
  return (
    <Box>
      <Box>
        <Title order={1} ta="left">
          Up Your{" "}
          <Text span c="#60a5fa" inherit>
            Skills{" "}
          </Text>
          <br />
          To{" "}
          <Text span c="#60a5fa" inherit>
            Advance{" "}
          </Text>
          Your <br />
          <Text span c="#60a5fa" inherit>
            Carrer{" "}
          </Text>
          path
        </Title>
      </Box>
      <Text c="#646464" size="sm" mt="xl" ta="left">
        Learn UI-UX Design skills with weekend UX . The latest online <br />
        learning system and material that help your knowledge growing.
      </Text>
      <Flex gap="md" mt="xl" mb="md">
        <Button>Get Started</Button>
        <Button variant="outline">Get free trail</Button>
      </Flex>
      <Image src={getStartLabel} mt={50} />
    </Box>
  );
};

export default GetStartText;
