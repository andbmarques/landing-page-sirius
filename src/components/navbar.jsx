import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Logo from "./logo";
import { Navbutton, Navlink } from "./navlinks";
import { List } from "phosphor-react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuButtonRef = useRef();

  return (
    <HStack
      justifyContent={["space-between"]}
      p="10"
      h="calc(10vh)"
      w={["100%"]}
      bgColor="gray.900"
    >
      <Logo />
      <HStack display={["none", "none", "flex"]} gap="10">
        <Navlink>Início</Navlink>
        <Navlink>About</Navlink>
        <Navlink>Benefits</Navlink>
        <Navlink>How it Works?</Navlink>
        <Navbutton>Know More</Navbutton>
      </HStack>
      <IconButton
        display={["flex", "flex", "none"]}
        size="lg"
        icon={<List color="white" weight="bold" />}
        variant="ghost"
        colorScheme="blackAlpha"
        ref={menuButtonRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={menuButtonRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader position="absolute" top={0} right={0}>
            <DrawerCloseButton color={"white"} />
          </DrawerHeader>
          <DrawerBody bgColor="gray.900">
            <VStack py="10" gap="10">
              <Navlink>Início</Navlink>
              <Navlink>About</Navlink>
              <Navlink>Benefits</Navlink>
              <Navlink>How it works?</Navlink>
              <Navbutton>Know More</Navbutton>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Navbar;
