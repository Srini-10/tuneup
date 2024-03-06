import { Flex } from "@mantine/core";
import Advertisement from "../components/advertisement";
import CoursesTab from "../components/courses-tab";
import RoadmapTab from "../components/roadmap-tab";
import VisionMission from "../components/vision-mission";
import Certification from "../components/certification";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Flex mt="xl" direction="column" gap="xl">
        <Advertisement />
        <CoursesTab />
        <VisionMission />
        <RoadmapTab />
        <Certification />
      </Flex>
    </>
  );
};

export default Dashboard;
