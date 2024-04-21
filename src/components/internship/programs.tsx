import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import ProgramCard from "./program-card";

type Props = {};

const Programs = (props: Props) => {
  return (
    <>
      <Box ta="left" p="xl" ml="xl">
        <Text c="#60a5fa" size="md" fw={600}>
          Explore Programs
        </Text>
        <Title order={1} mt="md">
          Our Most Popular Class
        </Title>
        <Text c="#667085" size="sm" mt="md">
          Let's join our famous class, the knowledge provided will definitely be
          useful for you.
        </Text>
        <Flex gap="xl" align="center" justify="center">
          <ProgramCard
            imageSrc="https://s3-alpha-sig.figma.com/img/a05b/9903/ed4c738aeb667522e57e8df1f6bac2ee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C9Xa9JZM1gP3DTEYZrZrBX1-Y-v297sKI71mjP0G5-PcfgPguX9DmPMnAzx9CJ4pqaBc7WxUAB4dAmrAxXtJlj0AZ6CAwmROQA2pxFmcEXNbAZ2xGjGjLJRTR6stFhygOEZTFa8IomrOGfc10d920Dvtc9VtV-fCHuAKGqCaD3KpIQI4H3fY5V~BY7L4CFhh1SX9Jz63bAuxGjA4Q6xgo5avNTKiOjMSIDZH54mVsfQKMQ2EBXqaYjY9lWpXae5GBZ9ZwjfDy3dJc6cAiBHoXNnoAFWXjFk~oVL4EhwWFyfrmP3lVucyfz2u9IXhgb33dueK5X6AZD1PkuPFqAn3qA__"
            title="Figma UI UX Design"
            content="Use Figma to get a job in UI Design, User Interface, User Experience design."
          />
          <ProgramCard
            imageSrc="https://s3-alpha-sig.figma.com/img/4c14/8515/0cd487c9c36d0c807b81298265d4ce93?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UBWQpsTiwPKUBvrtYsaOqWeFGPAD69Hs4-CVYGHT3ttB9P2K9AnD1~52EfPGKVQR9UPHRjEoRQrLsjAkrLUebn-wTNjSHMBPeObRpX3--IBPETvf1d1wkkz0VibO2R25fYtyB3sJo1mSqS-4R2edW09bc1T1qCuKACb3q9iTbIswv2nrRFOwc86~WGTEOPT52UJWHqGEjOKKIz9bnFnqK0fG-W2tGs7~MBrtiXaJPuhlKRpwNVQx0n-4Cfo~acW6Yauggd~PTlW17LChqcOhzoKWTSGf3L0nXfcvYj4l8cDqOpnb-5Q5GBJFSR5Kwu53722l2gK5tqMsCZhkGsed6Q__"
            title="Learn With Shoaib"
            content="Use Figma to get a job in UI Design, User Interface, User Experience design."
          />
          <ProgramCard
            imageSrc="https://s3-alpha-sig.figma.com/img/93a5/e429/5f57ac056d170d1388028aa90dc75b6a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=egzCyw1T07hY9hpL1xGfQYlUwnBsMLtucUzlbes2opVcNBL5rPkIeI3UK9hrslDreDpbuqfVsSvf7H1rfAaaxjsMKcgD4WXb5uX-MDO8HPFk-ywkkI44dxx3lN2P1W6H5G7bhFUzzbZgVA0njiUloWRdL89x~4kYta9HcF7rAicGM-ixDL6tjGz-WhIiLd5B~NHAPwdee8Er6cBmRa~RRzqmEijt6a~dQ5Kmn1ZAfyhblRdBCwQyNqZRvaQspZ263C3AtW8VH4V8TipSGBkM5aK0X5jAHYJmbGyTICUabFd3e3G5B8a5U7FVbYqfFoEoaMK4h3psdDpBMlDmM97YuQ__"
            title="Building User Interface.."
            content="Use Figma to get a job in UI Design, User Interface, User Experience design."
          />
          <ProgramCard
            imageSrc="https://s3-alpha-sig.figma.com/img/93a5/e429/5f57ac056d170d1388028aa90dc75b6a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=egzCyw1T07hY9hpL1xGfQYlUwnBsMLtucUzlbes2opVcNBL5rPkIeI3UK9hrslDreDpbuqfVsSvf7H1rfAaaxjsMKcgD4WXb5uX-MDO8HPFk-ywkkI44dxx3lN2P1W6H5G7bhFUzzbZgVA0njiUloWRdL89x~4kYta9HcF7rAicGM-ixDL6tjGz-WhIiLd5B~NHAPwdee8Er6cBmRa~RRzqmEijt6a~dQ5Kmn1ZAfyhblRdBCwQyNqZRvaQspZ263C3AtW8VH4V8TipSGBkM5aK0X5jAHYJmbGyTICUabFd3e3G5B8a5U7FVbYqfFoEoaMK4h3psdDpBMlDmM97YuQ__"
            title="Building User Interface.."
            content="Use Figma to get a job in UI Design, User Interface, User Experience design."
          />
        </Flex>
      </Box>
    </>
  );
};

export default Programs;
