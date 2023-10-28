import { HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <HStack>
      <Heading size='lg' color='white'>Lorem Ipsum  </Heading>
      <Heading mx='-1' size='lg' color='blue.500'>.</Heading>
    </HStack>
  );
};
export default Logo;
