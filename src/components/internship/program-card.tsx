import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Modal,
  Select,
  Text,
  Title,
} from "@mantine/core";
import { colorResolver } from "@mantine/core/lib/core/Box/style-props/resolvers/color-resolver/color-resolver";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  imageSrc: any;
  duration: string;
  title: string;
  content: string;
};

const ProgramCard = ({ imageSrc, title, content, duration }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box
      h={400}
      w={330}
      mt="md"
      m="auto"
      style={{
        borderRadius: 10,
        boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flex justify="center" align="center" m="auto" p="md">
        <Image
          src={imageSrc}
          style={{
            borderRadius: 10,
          }}
          h={160}
          w={320}
        />
      </Flex>
      <Text
        pl={4}
        ml={20}
        ta="justify"
        style={{ fontSize: "13px" }}
        c="#60a5fa"
      >
        {duration}
      </Text>
      <Title order={4} pt={7} ta="justify" pb={3} pl={0} p={10} ml={20}>
        {title}
      </Title>
      <Text pt={2} p={20} size="sm" ta="justify">
        {content}
      </Text>
      <Modal opened={opened} onClose={close} centered>
        <Flex w="60%" justify="center" direction="column" m="auto">
          <Title order={4} ta="center" mb="md">
            Register
          </Title>
          <Input.Label required>Name</Input.Label>
          <Input name="Name" mb="md" />
          <Input.Label required>Email</Input.Label>
          <Input name="Email" mb="md" />
          <Input.Label required>Mobile Number</Input.Label>
          <Input name="Mobile Number" mb="md" />
          <Input.Label required>College name</Input.Label>
          <Input name=">College name" mb="md" />
          <Input.Label required>Overall CGPA</Input.Label>
          <Input name=">Overall CGPA" mb="md" />
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={[
              "Frontend Development",
              "Application Development",
              "MySQL Database",
              "Digital Marketing",
            ]}
            placeholder="Pick your Course"
            label="Select your Course"
            required
          />
          <Flex justify="center" m="auto" mb="lg" mt="xl">
            <Button onClick={open}>Register</Button>
          </Flex>
        </Flex>
      </Modal>
      <Flex justify="center" m="auto" mt="lg">
        <Button onClick={open}>Register</Button>
      </Flex>
    </Box>
  );
};

export default ProgramCard;
