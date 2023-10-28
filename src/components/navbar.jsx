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

  const goToHero = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose()
    }
  };

  const goToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose()
    }
  };

  const goToBenefits = () => {
    const element = document.getElementById("benefits");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose()
    }
  };

  const goToHowWorks = () => {
    const element = document.getElementById("howworks");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose()
    }
  };
  const goToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose()
    }
  };

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
        <Navlink onClick={goToHero}>Home</Navlink>
        <Navlink onClick={goToAbout}>About</Navlink>
        <Navlink onClick={goToBenefits}>Benefits</Navlink>
        <Navlink onClick={goToHowWorks}>How it Works?</Navlink>
        <Navbutton onClick={goToCalculator}>Know More</Navbutton>
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
              <Navlink onClick={goToHero}>Home</Navlink>
              <Navlink onClick={goToAbout}>About</Navlink>
              <Navlink onClick={goToBenefits}>Benefits</Navlink>
              <Navlink onClick={goToHowWorks}>How it Works?</Navlink>
              <Navbutton onClick={goToCalculator}>Know More</Navbutton>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Navbar;
