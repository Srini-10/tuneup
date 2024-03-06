import { Flex, Image } from "@mantine/core";
import { useRef } from "react";
import BigBanner from "../assets/big-banner-1.jpeg";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

type Props = {};

const RightTop = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      height={250}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      w="400px"
      withControls={false}
      withIndicators
    >
      <Carousel.Slide>
        <Image src={BigBanner} alt="Banner" p="lg" w="400px" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src={BigBanner} alt="Banner" p="lg" w="400px" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src={BigBanner} alt="Banner" p="lg" w="400px" />
      </Carousel.Slide>
    </Carousel>
  );
};

const RightBottom = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      height={250}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      w="400px"
      withControls={false}
      withIndicators
    >
      <Carousel.Slide>
        <Image src={BigBanner} alt="Banner" p="lg" w="400px" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src={BigBanner} alt="Banner" p="lg" w="400px" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src={BigBanner} alt="Banner" p="lg" w="400px" />
      </Carousel.Slide>
    </Carousel>
  );
};

const Left = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      height={500}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      w="450px"
      withControls={false}
      withIndicators={false}
      orientation="vertical"
    >
      <Carousel.Slide>
        <Image src={BigBanner} alt="Banner" p="lg" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src={BigBanner} alt="Banner" p="lg" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src={BigBanner} alt="Banner" p="lg" />
      </Carousel.Slide>
    </Carousel>
  );
};

const Advertisement = (props: Props) => {
  return (
    <Flex justify="center" align="center">
      <Left />
      <Flex direction="column" align="center">
        <RightTop />
        <RightBottom />
      </Flex>
    </Flex>
  );
};

export default Advertisement;
