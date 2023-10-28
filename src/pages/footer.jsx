import {
  HStack,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../components/logo";

const Footer = () => {
  return (
    <VStack
      alignItems="center"
      justifyContent="start"
      py={["3", "3", "10"]}
      w="90%"
      h="100%"
      borderTop="2px solid"
      borderColor="gray.700"
      mx="10"
    >
      <Stack
        p={["3", "3", "10"]}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        direction={["column", "column", "row"]}
        gap='5'
      >
        <Stack
          direction='column'
          gap={["3", "3", "10"]}
          alignItems="start"
          w={["100%", "100%", "30%"]}
        >
          <Logo />
          <Text color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula
            magna, viverra quis mauris non, finibus vulputate lorem. Vivamus
            vitae dolor nec orci tincidunt lobortis. Ut vel dolor euismod,
            sodales turpis quis, consectetur ipsum. In sem magna, vestibulum sed
            augue quis, pellentesque pretium augue.
          </Text>
        </Stack>
        <Stack
          direction='row'
          gap={["5", "5", "10"]}
          alignItems="start"
          w={["100%", "100%", "30%"]}
        >
          <List color="white" spacing='3'>
            <ListItem>
              <Heading size='sm'>Lorem</Heading>
            </ListItem>
            <ListItem>
                <Link>Ipsum</Link>
            </ListItem>
            <ListItem>
                <Link>Dolor</Link>
            </ListItem>
            <ListItem>
                <Link>Sit</Link>
            </ListItem>
          </List>
          <List color="white" spacing='3'>
            <ListItem>
              <Heading size='sm'>Lorem</Heading>
            </ListItem>
            <ListItem>
                <Link>Ipsum</Link>
            </ListItem>
            <ListItem>
                <Link>Dolor</Link>
            </ListItem>
            <ListItem>
                <Link>Sit</Link>
            </ListItem>
          </List>
          <List color="white" spacing='3'>
            <ListItem>
              <Heading size='sm'>Lorem</Heading>
            </ListItem>
            <ListItem>
                <Link>Ipsum</Link>
            </ListItem>
            <ListItem>
                <Link>Dolor</Link>
            </ListItem>
            <ListItem>
                <Link>Sit</Link>
            </ListItem>
          </List>
          <List color="white" spacing='3'>
            <ListItem>
              <Heading size='sm'>Lorem</Heading>
            </ListItem>
            <ListItem>
                <Link>Ipsum</Link>
            </ListItem>
            <ListItem>
                <Link>Dolor</Link>
            </ListItem>
            <ListItem>
                <Link>Sit</Link>
            </ListItem>
          </List>
          
        </Stack>
      </Stack>
      <HStack p='6' position={'absolute'} bottom={0}>
        <Text color='white' fontSize='sm'>github.com/andbmarques</Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
