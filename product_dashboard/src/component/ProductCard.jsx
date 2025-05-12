import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const ProductCard=({product})=>{
   
    return(
       <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p={4}>
        <Image src={product.image} alt={product.title} boxSize='200px' objectFit='contain' mx="auto"/>
        <Stack spacing={2} mt={4}>
            <Text fontWeight='bold' noOfLines={1} >{product.title}</Text>
            <Text color='gray.200'>{product.price} </Text>
            <Text fontSize='sm' noOfLines={2}>{product.description}</Text>
            <Stack direction='row' justify="space-between">
                <Button size='sm' colorScheme="teal" as={Link} to={`/product/${product.id}`}>Details</Button>
                
            </Stack>
        </Stack>
       </Box>
    )
}

export default ProductCard