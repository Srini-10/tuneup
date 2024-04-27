import { Card, Avatar, Text, Group, Title, Flex } from "@mantine/core";
import classes from "./user-card.module.css";
import { MdLogout } from "react-icons/md";

const stats = [
  { value: "34K", label: "Followers" },
  { value: "187", label: "Follows" },
  { value: "1.6K", label: "Posts" },
];

const UserCard = () => {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <>
      <Title order={2} ta="center" mb="xl">
        Profile
      </Title>

      <Card withBorder padding="xl" radius="md" className={classes.card}>
        <Card.Section
          h={140}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
          }}
        />
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
          size={80}
          radius={80}
          mx="auto"
          mt={-30}
          className={classes.avatar}
        />
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Bill Headbanger
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          Fullstack engineer
        </Text>
        <Group mt="md" justify="center" gap={30}>
          {items}
        </Group>
      </Card>
      <Text ta="center" c="red" fz="xl" mt="xl">
        <Flex gap="sm" align="center" justify="center">
          Logout
          <MdLogout />
        </Flex>
      </Text>
    </>
  );
};

export default UserCard;
