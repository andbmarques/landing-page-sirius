import { Button, Link } from "@chakra-ui/react";
import React from "react";

const Navlink = ({ children }) => {
    return (
        <Link href="#" color='white'>
            { children }
        </Link>
    )
}

const Navbutton = ({ children }) => {
    return (
        <Button colorScheme='blue' px='6' borderRadius='lg' >
            { children }
        </Button>
    )
}

export { Navlink, Navbutton };