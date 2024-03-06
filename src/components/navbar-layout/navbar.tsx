import Logo from "../../assets/tuneup-logo-light.png";
import LogoDark from "../../assets/tuneup-logo-dark.png";
import { FaQuestion } from "react-icons/fa6";
import CustomSearch from "../custom-search";
import {
  Box,
  Burger,
  Flex,
  Image,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import Theme from "../theme/theme";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <>
      <Flex
        h="40px"
        w="100%"
        p="md"
        justify="space-between"
        gap="20px"
        mb="xl"
        m="auto"
      >
        <Flex align="center" gap="lg" p="md" w="40%">
          <Box>
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
            />
          </Box>
          <Box>
            <LiaLaptopCodeSolid size={33} />
          </Box>
          <Box>
            <FaQuestion size={25} />
          </Box>
        </Flex>
        <Flex align="center" h="30" w="10%" mr="xl">
          {computedColorScheme === "light" && (
            <Image src={Logo} height={120} width={120} />
          )}
          {computedColorScheme === "dark" && (
            <Image src={LogoDark} height={120} width={120} />
          )}
        </Flex>
        <Flex justify="center" w="25%" ml="xl">
          <CustomSearch />
        </Flex>
        <Flex justify="flex-end">
          <Theme />
        </Flex>
      </Flex>
      <hr />
    </>
  );
};

export default Navbar;
