import { Box, Button, Flex, Image, Text, Title } from "@mantine/core";
import React from "react";
import GetStartText from "./get-start-text";
import GetStartGirl from "../../assets/get-start-girl.svg";

type Props = {};

const GetStart = (props: Props) => {
  return (
    <>
      <Flex
        h={500}
        w="80%"
        justify="space-between"
        m="auto"
        mt="md"
        p="md"
        align="center"
      >
        <GetStartText />
        <Box h={400} w={400} bg="#60a5fa" style={{ borderRadius: "50%" }}>
          <Image src={GetStartGirl} />
        </Box>
      </Flex>
    </>
  );
};

export default GetStart;
