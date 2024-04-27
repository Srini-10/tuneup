import { Flex } from "@mantine/core";
import Advertisement from "../components/advertisement";
import CoursesTab from "../components/courses-tab";
import RoadmapTab from "../components/roadmap-tab";
import VisionMission from "../components/vision-mission";
import Certification from "../components/certification";
import Navbar from "../components/navbar-layout/navbar";
import Footer from "../components/footer";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Navbar />
      <Flex mt="xl" direction="column" gap="xl">
        <Advertisement />
        <CoursesTab />
        <VisionMission />
        <RoadmapTab />
        <Certification />
      </Flex>
      <Footer />
    </>
  );
};

export default Dashboard;
