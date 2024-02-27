import React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Container, Flex, Image } from "@mantine/core";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import JS from "../assets/javascript.svg";

type Props = {};

const CustomCarousel = (props: Props) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      withControls={false}
      height={150}
      w={150}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      bg="white"
      mt={0}
    >
      <Carousel.Slide>
        <Flex justify="center" align="center">
          <Image src={HTML} h={100} w={100} />
        </Flex>
      </Carousel.Slide>
      <Carousel.Slide>
        <Flex justify="center" align="center">
          <Image src={CSS} h={100} w={100} />
        </Flex>
      </Carousel.Slide>
      <Carousel.Slide>
        <Flex justify="center" align="center">
          <Image src={JS} h={100} w={100} />
        </Flex>
      </Carousel.Slide>
    </Carousel>
  );
};

export default CustomCarousel;
