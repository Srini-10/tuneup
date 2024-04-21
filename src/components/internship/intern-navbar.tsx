import { Button, Container, Flex, Image } from "@mantine/core";
import Logo from "../../assets/tuneup-logo-light.png";

type Props = {};

const InternNavbar = (props: Props) => {
  return (
    <>
      <Flex
        h={10}
        w="100%"
        p="xl"
        justify="space-between"
        gap="20px"
        m="auto"
        align="center"
      >
        <Flex align="center" w="10%" mr="xl">
          <Image src={Logo} height={120} width={120} />
        </Flex>
        <Button>Register</Button>
      </Flex>
      <hr />
    </>
  );
};

export default InternNavbar;
