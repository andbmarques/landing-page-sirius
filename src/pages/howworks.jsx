import {
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  VStack,
} from "@chakra-ui/react";
import {
  NumberCircleFour,
  NumberCircleOne,
  NumberCircleThree,
  NumberCircleTwo,
} from "phosphor-react";
import React from "react";
import { Fade } from "react-reveal";

const HowWorks = () => {
  return (
    <VStack
      id="howworks"
      alignItems="start"
      justifyContent="start"
      w="100%"
      h="100%"
    >
      <Stack
        flexDirection={["column", "column", "row"]}
        w={"100%"}
        h="calc(100vh)"
        justifyContent="center"
      >
        <VStack
          w={["100%", "100%", "35%"]}
          h={["10%", "10%", "100%"]}
          justifyContent={["center", "center", "start"]}
          alignItems="center"
          px="10"
          py="10"
        >
          <HStack>
            <Fade top>
              <Heading color="white">How it works</Heading>
              <Heading color="blue.500">?</Heading>
            </Fade>
          </HStack>
        </VStack>
        <VStack
          w={["100%", "100%", "65%"]}
          h={["90%", "90%", "100%"]}
          justifyContent="start"
          alignItems="center"
          px="10"
          py="10"
        >
          <List
            px="5"
            textAlign="justify"
            spacing={10}
            fontSize={["md", "xl", "2xl"]}
            color="white"
          >
            <Fade right>
              <ListItem>
                <ListIcon as={NumberCircleOne} weight="fill" color="blue.500" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                odio ex, ultricies pretium nisi ut, dignissim porttitor dui. Sed
                faucibus ipsum arcu, ac euismod risus convallis vitae.
              </ListItem>
            </Fade>
            <Fade right>
              <ListItem>
                <ListIcon as={NumberCircleTwo} weight="fill" color="blue.500" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                odio ex, ultricies pretium nisi ut, dignissim porttitor dui. Sed
                faucibus ipsum arcu, ac euismod risus convallis vitae.
              </ListItem>
            </Fade>
            <Fade right>
              <ListItem>
                <ListIcon
                  as={NumberCircleThree}
                  weight="fill"
                  color="blue.500"
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                odio ex, ultricies pretium nisi ut, dignissim porttitor dui. Sed
                faucibus ipsum arcu, ac euismod risus convallis vitae.
              </ListItem>
            </Fade>
            <Fade right>
              <ListItem>
                <ListIcon
                  as={NumberCircleFour}
                  weight="fill"
                  color="blue.500"
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                odio ex, ultricies pretium nisi ut, dignissim porttitor dui. Sed
                faucibus ipsum arcu, ac euismod risus convallis vitae.
              </ListItem>
            </Fade>
          </List>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default HowWorks;
