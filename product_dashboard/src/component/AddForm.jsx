import { Box, Button, FormControl, FormLabel, Input, Select, Textarea, useToast } from "@chakra-ui/react";

import React, { useState } from "react";

const AddForm=()=>{
    const[form,setForm]=useState({
        title:"",
        description:"",
        price:'',
        category:'',
        image:''
    });

    const toast=useToast();

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log("New Form")
        console.log(form)
        toast({
            title:"Product Added",
            description:"lorem djflkjdfjad lfjslkdfja dfksf asdlasdnfads",
            status:'success',
            duration:1000,
            isClosable:true,
        });

        setForm(   {  title:"",
        description:"",
        price:'',
        category:'',
        image:''});

    };
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setForm(prev=>({...prev,[name]:value}));
    };
    return(
        <>
        <Box maxW='md' mx='auto' p={4}>
            <form onSubmit={handleSubmit}>
             <FormControl isRequired mb={3}>
                <FormLabel>Title</FormLabel>
                <Input name='title' value={form.title} onChange={handleChange}/>
             </FormControl>
             <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea name="description" value={form.description} onChange={handleChange}/>
             </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input name="price" value={form.price} onChange={handleChange}/>
             </FormControl>
                <FormControl>
                <FormLabel>Category</FormLabel>
                <Select name="category" value={form.category} onChange={handleChange}>
                    <option value=''>Select Category</option>
                    <option value='electronics'>Electronics</option>
                    <option value='jewelery'>Jewelery</option>
                </Select>
             </FormControl>
                <FormControl>
                <FormLabel>Image Url</FormLabel>
                <Input name="image" value={form.image} onChange={handleChange}/>
             </FormControl>
             <Button type="submit" colorScheme="teal" width='full'>Add Product</Button>
            </form>

        </Box>
        </>
    )
}
export default AddForm