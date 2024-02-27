import { useState } from "react";
import { Tabs } from "@mantine/core";

const TabList = () => {
  return (
    <div className="mt-10">
      <Tabs
        color="lime"
        variant="pills"
        radius="xl"
        defaultValue="course-library"
      >
        <Tabs.List justify="center">
          <Tabs.Tab value="course-library" w={200} fw="lighter" fz="xl">
            Course Library
          </Tabs.Tab>
          <Tabs.Tab value="free-courses" w={200} fw="lighter" fz="xl">
            Free Courses
          </Tabs.Tab>
          <Tabs.Tab value="webinars" w={200} fw="lighter" fz="xl">
            Webinars
          </Tabs.Tab>
          <Tabs.Tab value="my-courses" w={200} fw="lighter" fz="xl">
            My Courses
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first" pt="xs">
          Gallery tab content
        </Tabs.Panel>
        <Tabs.Panel value="second" pt="xs">
          Messages tab content
        </Tabs.Panel>
        <Tabs.Panel value="third" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default TabList;
