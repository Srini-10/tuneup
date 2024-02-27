import Logo from "../../assets/tuneup-logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCodepen } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import CustomSearch from "../custom-search";
import { Link } from "react-router-dom";
import { Button, Container, Flex } from "@mantine/core";

const Navbar = () => {
  return (
    <Flex h="50px" w="100%" p="md" justify="center" gap="20px" mb="xl" m="auto">
      <Container>
        <img src={Logo} height={120} width={120} />
      </Container>
      <Container ml="lg">
        <CustomSearch />
      </Container>
      <Flex gap="xl" align="center" justify="center" m="auto">
        <Link to="/" style={{ color: "#4A4D45", fontSize: 17 }}>
          Courses
        </Link>
        <Link to="/" style={{ color: "#4A4D45", fontSize: 17 }}>
          About
        </Link>
        <Link to="/" style={{ color: "#4A4D45", fontSize: 17 }}>
          Page
        </Link>
      </Flex>
      <Container>
        <Button variant="outline" color="gray" size="sm" radius="xl">
          Sign Up
        </Button>
      </Container>
    </Flex>
  );
};

export default Navbar;
