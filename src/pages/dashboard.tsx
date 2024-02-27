import { Box, Image, Title } from "@mantine/core";
import Advertisement from "../components/advertisement";
import BannerLogo from "../assets/banner.svg";
import CustomCarousel from "../components/carousel";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Advertisement />
      <Box mt="xl">
        <Image src={BannerLogo} />
      </Box>
      <Box>
        <Title order={1} ta="center" mt="md">
          Explore Our Online Courses
        </Title>
      </Box>
    </>
  );
};

export default Dashboard;
