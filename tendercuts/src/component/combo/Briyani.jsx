import { Heading, HStack,Spacer ,Image, Box, Select,  Grid, Button, ButtonGroup} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ComboItem from "./ComboItem"



function Briyani(){
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [data,setData] =useState([]);
  const [page,setPage] =useState(1);

  const [sort,setSort] = useState('')
// react-slick 
let url = `https://cute-puce-jackrabbit-robe.cyclic.app/Biryani?_page=${page}&_limit=12`
if(sort){
  url= `https://cute-puce-jackrabbit-robe.cyclic.app/Biryani?_page=${page}&_limit=12&_sort=price&_order=${sort}`
}
  

  const fetchData = (page)=>{
      setLoading(true)
        axios.get(url)
        
        .then((res)=>{
         
          setData(res.data)
            setLoading(false)
            console.log(res.data)
        })
        .catch(()=>{
      setErr(true)
        })
    }
    useEffect(()=>{
       fetchData(page)
    },[page,sort])

    const handleChange = (val) => {
      let updatepage = page + val;
      setPage(updatepage);
      console.log("data",updatepage)
    };
      
    
    return (
        <>
    <Box ml={10}>
    <HStack mt={5}>
        <ul style={{color:"gray",listStyleType:"none"}} >
            <li>
            <span>Home</span>
            <span>/</span>
          <span style={{color:"#d11243"}}>Briyani</span>
            </li>
        </ul>
     </HStack>
    </Box>
    <HStack ml={5}> <Heading>Briyani</Heading>
     <span> <Image width="50px" src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78b9c4b2e0"/></span>
     <span>Farm-raised superior breed</span>
     <span color="gray">|</span>
     <span> <Image width="50px" src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78bdf673b7"/></span>
     <span>No Added Chemical , Antibiotic residue free.</span>
     </HStack>
     <Box width="300px"  ml={10}>
     <Select placeholder='Select price' onChange={(e)=>setSort(e.target.value)}>
    <option value="desc">High_To_low</option>
    <option  value="asc">Low_To_High</option>
    
  </Select>
</Box>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {
        data?.map((item)=>{
         return  <ComboItem  key={item.id} {...item} /> 
        })
      }
    
      </Grid>
     
      <ButtonGroup spacing='2' mt={4}>
    <Button variant='solid' colorScheme='red' onClick={() => handleChange(-1)} isDisabled={page===1}>
        PRE
      </Button>
      <Button variant='solid' colorScheme='red' isDisabled >
        {page}
      </Button>
      <Button variant='solid' colorScheme='red' onClick={() => handleChange(1)} isDisabled={page===4}>
        NEXT
      </Button>
    </ButtonGroup>

  
        </>
    )
}

export default Briyani;