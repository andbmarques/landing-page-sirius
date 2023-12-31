import { Button, HStack, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
  X,
} from "phosphor-react";
import React from "react";
import { Fade } from "react-reveal";

const Hero = () => {
  const goToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      pt={["8", "0", "0", "0"]}
      w="100%"
      h={["100%", "70%"]}
      id="hero"
    >
      <Fade top cascade>
        <Text
          border={"2px solid"}
          borderColor="blue.700"
          p="2"
          borderRadius="full"
          color="blue.700"
          mb="10"
          fontWeight="bold"
        >
          Lorem ipsum!
        </Text>
      </Fade>
      <HStack
        textAlign="center"
        px="10"
        justifyContent="center"
        wrap="wrap"
        color="white"
      >
        <Fade top cascade>
          <Heading lineHeight="1" fontSize={["3xl", "4xl", "4xl", "6xl"]}>
            Lorem ipsum dolor sit{" "}
          </Heading>
          <Heading
            mx={["0", "0", "2"]}
            fontSize={["3xl", "4xl", "6xl"]}
            color="blue.500"
            lineHeight="1"
          >
            amet
          </Heading>
          <Heading lineHeight="1" fontSize={["3xl", "4xl", "6xl"]}>
            .
          </Heading>
        </Fade>
      </HStack>

      <HStack my="5" textAlign="justify" px={["10", "10", "25%"]}>
        <Fade cascade left>
          <Text textAlign="center" color="whiteAlpha.700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit nibh sed magna sagittis malesuada. Nulla posuere, eros ac
            gravida tincidunt, enim dolor egestas diam, ac rutrum elit nisl ac
            dolor. Aenean ultrices purus in risus sagittis, non semper purus
            volutpat.
          </Text>
        </Fade>
      </HStack>
      <Fade cascade>
        <Button onClick={goToCalculator} colorScheme="blue" px="6" borderRadius="lg">
          Button
        </Button>
      </Fade>
      <HStack gap="10" mt="16" fontSize="3xl">
        <Fade cascade bottom>
          <Icon cursor="pointer" color="whiteAlpha.500" as={GithubLogo} />
          <Icon cursor="pointer" color="whiteAlpha.500" as={InstagramLogo} />
          <Icon cursor="pointer" color="whiteAlpha.500" as={FacebookLogo} />
          <Icon cursor="pointer" color="whiteAlpha.500" as={TwitterLogo} />
        </Fade>
      </HStack>
    </VStack>
  );
};

export default Hero;
