import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CoupleImg from "../assets/couple.jpg";
import { Fade } from "react-reveal";

const Saved = () => {
  return (
    <VStack id='about' alignItems="start" justifyContent="start" w="100%" h="100%">
      <Stack
        flexDirection={["column", "column", "row-reverse"]}
        w={"100%"}
        h="calc(100vh)"
        justifyContent='center'
        
      >
        <VStack
          w={["100%", "100%", "60%"]}
          h={["35%", "35%", "100%"]}
          justifyContent="space-evenly"
          alignItems="center"
          px="10"
          py='10'
        >
          <VStack>
            <Fade top>
              <Heading
                textAlign="center"
                size={["lg", "lg", "2xl"]}
                color="blue.400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Heading>
              <Text
                textAlign="center"
                fontSize={["lg", "lg", "2xl"]}
                color="white"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus dignissim justo sed mi iaculis maximus. Quisque
                efficitur egestas.
              </Text>
            </Fade>
          </VStack>
          <VStack>
            <Fade bottom text>
              <Heading
                fontSize={["4xl", "4xl", "6xl"]}
                textAlign="center"
                color="blue.300"
              >
                $4.000.000
              </Heading>
              <Text textAlign="center" color="gray.500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Fade>
          </VStack>
        </VStack>
        <VStack
          justifyContent="center"
          alignItems="center"
          w={["100%", "100%", "40%"]}
          h={["35%", "35%", "100%"]}
        >
          <Image
            src={CoupleImg}
            w="70%"
            h={["70%", "70%", "50%"]}
            borderRadius="2xl"
            objectFit="cover"
          />
        </VStack>
      </Stack>
    </VStack>
  );
};

export default Saved;
