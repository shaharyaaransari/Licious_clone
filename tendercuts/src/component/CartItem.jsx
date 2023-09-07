import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack ,Text} from "@chakra-ui/react";
function CartItem({price,Arrival,image,desc,title,id,handleDelete}) {
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
                    <Heading size='md'>{title}</Heading>
                    <Text>
                     {desc}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                    ₹{price}
                   
                    </Text>
                    <Text>{Arrival}</Text>
                  </Stack>
                </CardBody>
               
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    
                  <Button variant='solid' colorScheme='red'  >
                     Buy
                    </Button>
                    <Button variant='solid' colorScheme='red' onClick={()=>handleDelete(id)}>DELETE</Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
        </>
    )
}

export default CartItem;