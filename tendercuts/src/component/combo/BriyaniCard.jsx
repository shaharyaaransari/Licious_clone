import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack ,Text} from "@chakra-ui/react";
import axios from "axios";



function  BriyaniCard({Title,image,description,price,Arrival,id}){
  let obj={id:id,title:Title,image:image,desc:description,price:price,Arrival:Arrival}
   
  const handleCart=()=>{
    axios.post(`https://cute-puce-jackrabbit-robe.cyclic.app/Cart`,obj)
    .then((response)=> {
      console.log(response);
    })
    .catch((err)=>{
      console.log(err)
    })
  }
 

    return (
        <>
        <Card maxW='sm' >
  <CardBody>
    <Image
      src={image}
      alt='Chicken'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{Title}</Heading>
      <Text>
       {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ₹{price}
      </Text>
      <Text>{Arrival}</Text>
    </Stack>
  </CardBody>
 
  <CardFooter>
    <ButtonGroup spacing='2'>
      
    <Button variant='solid' colorScheme='red' onClick={()=>handleCart()} >
        Add 
      </Button>
      
    </ButtonGroup>
  </CardFooter>
</Card>
        </>
    )
}

export default BriyaniCard;