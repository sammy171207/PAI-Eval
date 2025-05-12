import { Box, Flex, Grid, Input, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import { option } from "framer-motion/client";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

const Home=()=>{
   const [products,setProducts]=useState([]);
   const [filtered,setFiltered]=useState([]);
   const[categories,setCategories]=useState([]);
   const[searchTeam,setSearchTeam]=useState();
   const[category,setCategory]=useState();
   const[price,setPrice]=useState(100);
   const[page,setPage]=useState(1);

   const itemsPerPage=6;
   const searchRef=useRef();
   useEffect(()=>{
    fetchData();
    fetchCategories();
   },[]);

   useEffect(()=>{},[searchTeam,category,price,products])

   const fetchData=async()=>{
    const res=await fetch("https://fakestoreapi.com/products");
    const data=await res.json();
    setProducts(data)
    setFiltered(data);
   };

   const fetchCategories=async()=>{
    const res=await fetch("https://fakestoreapi.com/products/categories");
    const data=await res.json();
    setCategories(data);
   }

   const filterProducts=()=>{
    let temp=[...products];
    if(searchTeam){
      temp=temp.filter(p=>p.title.toLowerCase().includes(searchTeam.toLowerCase()))
    }
    if(category){
      temp=temp.filter(p=>p.category==category)
    }
    temp=temp.filter(p=>p.price<=price)
    setFiltered(temp)
    setPage(1)
   }

   const paginated=filtered.slice((page-1)*itemsPerPage,page*itemsPerPage);
   const totalPages=Math.ceil(filtered.length/itemsPerPage)
    return (<Box p={4}>
      <Flex mb={4} gap={4} >
        <Input placeholder="Search Product" value={searchTeam} onChange={(e)=>setSearchTeam(e.target.value)}
           ref={searchRef}/>
           <Select placeholder="All Categories" onChange={(e)=>setCategory(e.target.value)}>
            {categories.map((cat,i)=>(
              <option key={i} value={cat}>{cat}</option>
            ))}
           </Select>
           <Box>
            <Text>Max Price:${price}</Text>
            <Slider
            max={1000}
            value={price}
            onChange={(val)=>setPrice(val)}width="200px">
              <SliderTrack>
                <SliderFilledTrack/>
                <SliderThumb/>
              </SliderTrack>
            </Slider>
           </Box>
         </Flex>

         <Grid 
         templateColumns='repeat(auto-fill,minmax(250px,1fr))' gap={6}>
          {paginated.map(product=>(
            <ProductCard key={product.id} product={product}/>
          ))}
         </Grid>

    </Box>)
}
export default Home;