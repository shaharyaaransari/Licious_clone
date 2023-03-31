import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack ,Text} from "@chakra-ui/react";
// Title": "Chicken Breast - Boneless",
// "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fcea4075-0ed2-23c1-2b3f-1cddcbd1d11f/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg",
// "description": "Skinless & boneless pieces of chicken breast.",
// "price": 265,
// "Arrival": "Tomorrow 8 AM - 11 AM"

function ChickenCard({Title,image,description,price,Arrival}){
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
    <Button variant='solid' colorScheme='red'>
        Add 
      </Button>
      
    </ButtonGroup>
  </CardFooter>
</Card>
        </>
    )
}

export default ChickenCard;