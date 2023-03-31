import { Heading, HStack, VStack ,Image, Box, Select, Stack, Grid} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ChickenCard from "./chickenCard";
function Chicken(){
  const [data,setData] =useState([]);
  const [page,setPage] =useState(1)
    const fetchData = ()=>{
        axios.get(`https://cute-puce-jackrabbit-robe.cyclic.app/chickenMeat`)
        .then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
    }
    useEffect(()=>{
       fetchData()
    },[])
    return (
        <>
    <Box ml={10}>
    <HStack mt={5}>
        <ul style={{color:"gray",listStyleType:"none"}} >
            <li>
            <span>Home</span>
            <span>/</span>
          <span style={{color:"#d11243"}}>Chicken</span>
            </li>
        </ul>
     </HStack>
    </Box>
    <HStack ml={5}> <Heading>Chicken</Heading>
     <span> <Image width="50px" src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78b9c4b2e0"/></span>
     <span>Farm-raised superior breed</span>
     <span color="gray">|</span>
     <span> <Image width="50px" src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78bdf673b7"/></span>
     <span>No Added Chemical , Antibiotic residue free.</span>
     </HStack>
     <Box width="300px"  ml={10}>
     <Select placeholder='Select price'>
    <option>High_To_low</option>
    <option>Low_To_High</option>
    
  </Select>
</Box>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {
        data?.map((item)=>{
         return  <ChickenCard  key={item.id} {...item}/> 
        })
      }
    
      </Grid>
        </>
    )
}

export default Chicken;