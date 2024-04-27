import { Box, Flex, Tabs } from "@mantine/core";
import Lottie from "lottie-react";
import studiesAnimation from "../assets/coding.json";
import UnitContent from "./unit-content";

type Props = {};

const UnitTabs = (props: Props) => {
  return (
    <Flex mt="xl" justify="space-between" align="center" gap="xl">
      <Box>
        <Tabs color="#60a5fa" variant="default" defaultValue="unit-1">
          <Tabs.List justify="center">
            <Tabs.Tab value="unit-1" fz="xl">
              Unit1
            </Tabs.Tab>
            <Tabs.Tab value="unit-2" fz="xl">
              Unit2
            </Tabs.Tab>
            <Tabs.Tab value="unit-3" fz="xl">
              Unit3
            </Tabs.Tab>
            <Tabs.Tab value="unit-4" fz="xl">
              Unit4
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="unit-1" pt="xs">
            <UnitContent />
          </Tabs.Panel>
          <Tabs.Panel value="unit-2" pt="xs">
            Messages tab content
          </Tabs.Panel>
          <Tabs.Panel value="unit-3" pt="xs">
            Settings tab content
          </Tabs.Panel>
          <Tabs.Panel value="unit-4" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </Box>
      <Box h={350} w={300} mb="xl">
        <Lottie animationData={studiesAnimation} loop={true} />
      </Box>
    </Flex>
  );
};

export default UnitTabs;
