import Logo from "../../assets/tuneup-logo-light.png";
import LogoDark from "../../assets/tuneup-logo-dark.png";
import { FaQuestion } from "react-icons/fa6";
import CustomSearch from "../custom-search";
import { Flex, Image, useComputedColorScheme, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Theme from "../theme/theme";
import UserCard from "../user-card/user-crad";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

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
          <RiMenuUnfoldFill size={30} cursor="pointer" onClick={open} />
          <LiaLaptopCodeSolid size={33} />
          <FaQuestion size={25} />
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

      {/* Side drawer */}

      <Drawer
        opened={opened}
        onClose={close}
        title=""
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <UserCard />
      </Drawer>
      <hr />
    </>
  );
};

export default Navbar;
