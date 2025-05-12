import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <Flex bg='teal.500' p='4' color='white' align='center'>
            <Box fontWeight='bold' fontSize='xl'>
                Product DashBoard
            </Box>
            <Spacer/>
            <Box>
                <Button as={Link} to='/' colorScheme="teal" variant='ghost' mr='2'>Home</Button>
                <Button as={Link} to='/add_product' colorScheme="teal" variant='ghost' mr='2'>Add Product</Button>
                <Button as={Link} to='/cart' colorScheme="teal" variant='ghost' mr='2'>Cart</Button>
            </Box>
        </Flex>
    )
}
export default Navbar