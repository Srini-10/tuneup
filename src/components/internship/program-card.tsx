import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  imageSrc: any;
  title: string;
  content: string;
};

const ProgramCard = ({ imageSrc, title, content }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box
      h={500}
      w={380}
      mt="md"
      style={{
        borderRadius: 10,
        boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
      }}
    >
      <Flex justify="center" align="center" m="auto" p="md">
        <Image
          src={imageSrc}
          style={{
            borderRadius: 10,
          }}
          h={240}
          w={330}
        />
      </Flex>
      <Title order={4} p={10} ml={20}>
        {title}
      </Title>
      <Text p={10} ml={20}>
        {content}
      </Text>
      <Modal opened={opened} onClose={close} centered>
        <Flex w="60%" justify="center" direction="column" m="auto">
          <Title order={4} ta="center" mb="md">
            Register
          </Title>
          <Input.Label>Name</Input.Label>
          <Input name="Name" mb="md" />
          <Input.Label>Email</Input.Label>
          <Input name="Email" mb="md" />
          <Input.Label>Mobile Number</Input.Label>
          <Input name="Mobile Number" mb="md" />
          <Input.Label>College name</Input.Label>
          <Input name=">College name" mb="md" />
          <Input.Label>Overall CGPA</Input.Label>
          <Input name=">Overall CGPA" mb="md" />
          <Flex justify="center" m="auto" mt="xl">
            <Button onClick={open}>Register</Button>
          </Flex>
        </Flex>
      </Modal>
      <Flex justify="center" m="auto" mt="xl">
        <Button onClick={open}>Register</Button>
      </Flex>
    </Box>
  );
};

export default ProgramCard;
