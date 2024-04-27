import { Box, Flex, Image, Text } from "@mantine/core";
import serviceCardIcon from "../../assets/service-card-icon.svg";

type Props = {
  title: string;
  content: string;
};

const ServiceCard = ({ title, content }: Props) => {
  return (
    <Box
      h={200}
      w={350}
      style={{ borderRadius: 10, border: "1px solid #60a5fa" }}
      p="md"
      mt="xl"
    >
      <Flex align="center" m="auto" gap="sm">
        <Image src={serviceCardIcon} />
        <Text fw={600} c="#101828">
          {title}
        </Text>
      </Flex>
      <Text c="#646464" size="sm" ta="left" h={50} mt="md">
        {content}
      </Text>
      <Text c="#60a5fa" size="sm" ta="left" mt="md">
        Learn More {" >"}
      </Text>
    </Box>
  );
};

export default ServiceCard;
