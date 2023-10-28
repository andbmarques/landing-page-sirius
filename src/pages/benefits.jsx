import { HStack, Heading, Icon, VStack, Stack, Text } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { Fade } from "react-reveal";
import {
  CurrencyDollar,
  Gear,
  Globe,
  Money,
  Rocket,
  Star,
} from "phosphor-react";

const Benefits = () => {
  return (
    <VStack
      alignItems="center"
      justifyContent="start"
      py="10"
      w="100%"
      h="100%"
    >
      <Fade top>
        <Heading color="white">
          <Icon
            fontSize={["lg", "lg", "2xl"]}
            as={Star}
            weight="fill"
            color="blue.500"
          />{" "}
          Benefits{" "}
          <Icon
            fontSize={["lg", "lg", "2xl"]}
            as={Star}
            weight="fill"
            color="blue.500"
          />
        </Heading>
      </Fade>
      <HStack
        justifyContent="center"
        alignItems="center"
        p="10"
        gap={["5", "5", "10"]}
        wrap="wrap"
        px="56"
      >
        <Fade bottom cascade>
          <Stack
            p={["5", "5", "8"]}
            border="2px solid"
            w={["calc(90vw)", "calc(90vw)", "calc(25vw)"]}
            h={["auto", "auto", "auto"]}
            borderRadius="lg"
            borderColor="gray.700"
            direction="column"
          >
            <HStack justifyContent="center" alignItems="center">
              <Icon
                as={Rocket}
                color="blue.500"
                weight={"duotone"}
                fontSize={["5xl", "5xl", "6xl"]}
              />
              <Heading
                color="whiteAlpha.900"
                textAlign="center"
                fontSize={["2xl", "2xl", "3xl"]}
              >
                Lorem ipsum dolor sit amet
              </Heading>
            </HStack>
            <Text px="5" textAlign="center" color="whiteAlpha.700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio
              ex, ultricies pretium nisi ut, dignissim porttitor dui. Sed
              faucibus ipsum arcu, ac euismod risus convallis vitae.
            </Text>
          </Stack>
        </Fade>
        <Fade bottom cascade>
          <Stack
            p={["5", "5", "8"]}
            border="2px solid"
            w={["calc(90vw)", "calc(90vw)", "calc(25vw)"]}
            h={["auto", "auto", "auto"]}
            borderRadius="lg"
            borderColor="gray.700"
            direction="column"
          >
            <HStack justifyContent="center" alignItems="center">
              <Icon
                as={Globe}
                color="blue.500"
                weight={"duotone"}
                fontSize={["5xl", "5xl", "6xl"]}
              />
              <Heading
                color="whiteAlpha.900"
                textAlign="center"
                fontSize={["2xl", "2xl", "3xl"]}
              >
                Lorem ipsum dolor sit amet
              </Heading>
            </HStack>
            <Text px="5" textAlign="center" color="whiteAlpha.700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio
              ex, ultricies pretium nisi ut, dignissim porttitor dui. Sed
              faucibus ipsum arcu, ac euismod risus convallis vitae.
            </Text>
          </Stack>
        </Fade>
        <Fade bottom cascade>
          <Stack
            p={["5", "5", "8"]}
            border="2px solid"
            w={["calc(90vw)", "calc(90vw)", "calc(25vw)"]}
            h={["auto", "auto", "auto"]}
            borderRadius="lg"
            borderColor="gray.700"
            direction="column"
          >
            <HStack justifyContent="center" alignItems="center">
              <Icon
                as={Gear}
                color="blue.500"
                weight={"duotone"}
                fontSize={["5xl", "5xl", "6xl"]}
              />
              <Heading
                color="whiteAlpha.900"
                textAlign="center"
                fontSize={["2xl", "2xl", "3xl"]}
              >
                Lorem ipsum dolor sit amet
              </Heading>
            </HStack>
            <Text px="5" textAlign="center" color="whiteAlpha.700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio
              ex, ultricies pretium nisi ut, dignissim porttitor dui. Sed
              faucibus ipsum arcu, ac euismod risus convallis vitae.
            </Text>
          </Stack>
        </Fade>
        <Fade bottom cascade>
          <Stack
            p={["5", "5", "8"]}
            border="2px solid"
            w={["calc(90vw)", "calc(90vw)", "calc(25vw)"]}
            h={["auto", "auto", "auto"]}
            borderRadius="lg"
            borderColor="gray.700"
            direction="column"
          >
            <HStack justifyContent="center" alignItems="center">
              <Icon
                as={CurrencyDollar}
                color="blue.500"
                weight={"duotone"}
                fontSize={["5xl", "5xl", "6xl"]}
              />
              <Heading
                color="whiteAlpha.900"
                textAlign="center"
                fontSize={["2xl", "2xl", "3xl"]}
              >
                Lorem ipsum dolor sit amet
              </Heading>
            </HStack>
            <Text px="5" textAlign="center" color="whiteAlpha.700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio
              ex, ultricies pretium nisi ut, dignissim porttitor dui. Sed
              faucibus ipsum arcu, ac euismod risus convallis vitae.
            </Text>
          </Stack>
        </Fade>
      </HStack>
    </VStack>
  );
};
export default Benefits;
