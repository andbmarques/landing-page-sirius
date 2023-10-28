import {
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
  RadioGroup,
  Stack,
  VStack,
  Radio,
  Button,
  Icon,
} from "@chakra-ui/react";
import MapImg from "../assets/map.svg";
import React from "react";
import { Fade } from "react-reveal";
import {
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
  NumberCircleFour,
  CaretRight,
} from "phosphor-react";

const Calculator = () => {
  return (
    <VStack
      id="calculator"
      alignItems="start"
      justifyContent="start"
      w="100%"
      h="100%"
    >
      <Stack
        flexDirection={["column", "column", "row"]}
        w={"100%"}
        h="calc(100vh)"
      >
        <VStack
          w={["100%", "100%", "55%"]}
          h={["35%", "35%", "100%"]}
          bgImage={MapImg}
          bgPosition="center"
          bgSize={["cover", "cover", "contain"]}
          bgRepeat="no-repeat"
          bgColor={["gray.900", "gray.900", "transparent"]}
          bgBlendMode={["darken", "darken", "color"]}
          justifyContent="center"
          alignItems="center"
        >
          <Fade left>
            <Heading textAlign="center" my="2" color="white">
              <Icon
                as={CaretRight}
                weight="bold"
                fontSize={["lg", "lg", "2xl"]}
                color="blue.600"
              />{" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Heading>

            <List fontSize={["xl", "2xl"]} color="white">
              <ListItem>
                <ListIcon as={NumberCircleOne} color="blue.500" />
                Lorem ipsum dolor sit amet.
              </ListItem>
              <ListItem>
                <ListIcon as={NumberCircleTwo} color="blue.500" />
                Lorem ipsum dolor sit.
              </ListItem>
              <ListItem>
                <ListIcon as={NumberCircleThree} color="blue.500" />
                Lorem ipsum dolor sit amet.
              </ListItem>
              <ListItem>
                <ListIcon as={NumberCircleFour} color="blue.500" />
                Lorem ipsum dolor sit.
              </ListItem>
            </List>
          </Fade>
        </VStack>
        <VStack
          alignItems="center"
          justifyContent="center"
          w={["100%", "100%", "45%"]}
          h={["65%", "65%", "100%"]}
        >
          <VStack
            borderRadius="xl"
            bg="whiteAlpha.900"
            py="5"
            px={["7", "7", "12"]}
            h="80%"
            w="80%"
            gap="5"
            justifyContent="center"
          >
            <Heading mt="3" size={["md", "md", "lg"]}>
              Registration
            </Heading>
            <FormControl borderColor="blue.600" isRequired>
              <FormLabel color="blue.600">Name</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl borderColor="blue.600" isRequired>
              <FormLabel color="blue.600">Email address</FormLabel>
              <Input type="email" />
              <FormHelperText color="blue.800">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel color="blue.600" as="legend">
                Lorem Ipsum?
              </FormLabel>
              <RadioGroup defaultValue="Itachi">
                <HStack spacing="24px">
                  <Radio value="Lorem">Lorem</Radio>
                  <Radio value="Ipsum">Ipsum</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <Button colorScheme="blue" w="100%" my="3">
              Go!
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default Calculator;
