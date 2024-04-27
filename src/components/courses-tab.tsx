import { Box, Tabs } from "@mantine/core";
import CourseCard from "./course-card";

type Props = {};

const CoursesTab = (props: Props) => {
  return (
    <>
      <Tabs
        color="#60a5fa"
        variant="pills"
        radius="xl"
        defaultValue="course-library"
        p="xl"
      >
        <Tabs.List justify="center">
          <Tabs.Tab value="course-library" fz="md">
            Course Library
          </Tabs.Tab>
          <Tabs.Tab value="free-courses" fz="md">
            Free Courses
          </Tabs.Tab>
          <Tabs.Tab value="webinars" fz="md">
            Webinars
          </Tabs.Tab>
          <Tabs.Tab value="my-courses" fz="md">
            My Courses
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="course-library" p="xl">
          <CourseCard
            title="Python"
            price="FREE"
            desc="Python for Beginners"
            duration="3hr 45min"
            rating={0}
            videos={12}
            download={0}
          />
        </Tabs.Panel>
        <Tabs.Panel value="free-courses" pt="xs">
          <Box h="450px" w="350px">
            Free Courses
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="webinars" pt="xs">
          <Box h="450px" w="350px">
            Webinars
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="my-courses" pt="xs">
          <Box h="450px" w="350px">
            My Courses
          </Box>
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default CoursesTab;
