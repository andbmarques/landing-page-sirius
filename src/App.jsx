import { Heading, VStack } from "@chakra-ui/react";
import sprinkle from "./assets/sprinkle.svg";
import Navbar from "./components/navbar";
import Hero from "./pages/hero";
import Calculator from "./pages/calculator";
import Saved from "./pages/saved";
import HowWorks from "./pages/howworks";
import Benefits from "./pages/benefits";
import { useRef } from "react";
import Footer from "./pages/footer";

function App() {
  return (
    <VStack bg="gray.900">
      <VStack
        bgImg={sprinkle}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        w="100%"
        h="calc(100vh)"
      >
        <Navbar />
        <Hero />
      </VStack>
      <VStack bg="gray.900" w="100%" h="calc(100vh) ">
        <Saved />
      </VStack>
      <VStack bg="gray.900" w="100%" h="calc(100vh)">
        <Benefits />
      </VStack>
      <VStack bg="gray.900" w="100%" h="calc(100vh)">
        <HowWorks />
      </VStack>
      <VStack bg="gray.900" w="100%" h="calc(100vh)">
        <Calculator />
      </VStack>
      <VStack bg="gray.900" w="100%" h="calc(55vh)">
        <Footer />
      </VStack>
    </VStack>
  );
}

export default App;
