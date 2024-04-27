import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Modal,
  Rating,
  Text,
  Title,
} from "@mantine/core";
import CourseImage from "../assets/course-class.jpg";
import Timer from "../assets/timer.svg";
import Video from "../assets/video.svg";
import Download from "../assets/download-icon.svg";

type Props = {
  title: string;
  desc: string;
  price: string;
  duration: string;
  rating: number;
  videos: number;
  download: number;
};

const CourseCard = ({
  title,
  desc,
  price,
  duration,
  rating,
  videos,
  download,
}: Props) => {
  return (
    <>
      <Box
        h="450px"
        w="350px"
        bg="#FFFFFF"
        style={{
          borderRadius: "10px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Box p="md">
          <Image src={CourseImage} />
        </Box>
        <Flex justify="space-between" p="md">
          <Text c="#ACACAC" fz="md" fw="bold">
            {title}
          </Text>
          <Rating defaultValue={rating} size="xs" />
        </Flex>
        <Box ta="left" p="md">
          <Title order={2}>{desc}</Title>
          <Title order={4} c="#60a5fa">
            {price}
          </Title>
        </Box>
        <Flex justify="center">
          <Divider w="95%" variant="dashed" />
        </Flex>
        <Flex p="md" justify="center" gap="xl">
          <Flex gap="md" justify="center" align="center">
            <img src={Timer} alt="" />
            <Text fz="sm" c="#ACACAC">
              {duration}
            </Text>
          </Flex>
          <Flex gap="md" justify="center" align="center">
            <img src={Video} alt="" />
            <Text fz="md" c="#ACACAC">
              {videos} Videos
            </Text>
          </Flex>
          <Flex gap="md" justify="center" align="center">
            <img src={Download} alt="" />
            <Text fz="md" c="#ACACAC">
              {download} Sales
            </Text>
          </Flex>
        </Flex>

        <Box>
          <Button variant="filled" color="#60a5fa" radius="xl">
            Join Course
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CourseCard;
