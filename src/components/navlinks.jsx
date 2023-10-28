import { Button, Link } from "@chakra-ui/react";
import React from "react";

const Navlink = ({ children, onClick }) => {
    return (
        <Link onClick={onClick}  color='white'>
            { children }
        </Link>
    )
}

const Navbutton = ({ children, onClick }) => {
    return (
        <Button onClick={onClick} colorScheme='blue' px='6' borderRadius='lg' >
            { children }
        </Button>
    )
}

export { Navlink, Navbutton };