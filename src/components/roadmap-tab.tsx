import { Box, Tabs } from "@mantine/core";
import RoadmapCard from "./roadmap-card";

type Props = {};

const RoadmapTab = (props: Props) => {
  return (
    <>
      <Tabs
        color="#60a5fa"
        variant="pills"
        radius="xl"
        defaultValue="full-stack"
        w="100%"
      >
        <Tabs.List justify="center">
          <Tabs.Tab value="full-stack" fz="sm">
            Full Stack Web Development
          </Tabs.Tab>
          <Tabs.Tab value="python" fz="sm">
            Python Full Stack Development
          </Tabs.Tab>
          <Tabs.Tab value="frontend" fz="sm">
            Frontend Web Development
          </Tabs.Tab>
          <Tabs.Tab value="flutter" fz="sm">
            Flutter Application Development
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="full-stack" pt="xs">
          <RoadmapCard />
        </Tabs.Panel>
        <Tabs.Panel value="python" pt="xs">
          <Box h={1000} w="90%">
            Python Full Stack Development
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="frontend" pt="xs">
          <Box h={1000} w="90%">
            Frontend Web Development
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="flutter" pt="xs">
          <Box h={1000} w="90%">
            Flutter Application Development
          </Box>
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default RoadmapTab;
