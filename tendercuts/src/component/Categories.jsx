import { VStack ,Box,Image, Heading, SimpleGrid} from "@chakra-ui/react"


function Categories(){
    return(
       <>
       <VStack  mt={6}>
       <Heading as='h4' size='md'>Shop by categories</Heading>
       <Heading as='p' size='sm' color="gray">Freshest meats just for you</Heading>
       <VStack>
       <SimpleGrid columns={6} spacing={12} width="80%" >
  <Box  >
    <Image  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/111d6147-b116-f51c-bd9d-dddfd923ba97/original/Todays_Deal_1.png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">Todays Deals</Heading>
  </Box>
  <Box  >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e0ad08c2-c9ef-6f67-2882-95325d3b6951/original/Chicken_20.png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">Chicken</Heading>
  </Box>
  <Box  >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0bb75668-5525-72db-4784-b513a55e121e/original/Fish_30.png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">Fish & Seafood</Heading>
  </Box>
  <Box  >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/368fa172-c44f-29a7-8510-f2b18af37fbb/original/Mutton_20.png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">Mutton</Heading>
  </Box>
  <Box  >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d500a9a8-735d-2841-247c-6b7666dd3b5b/original/RTC_(1).png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">Ready to Cook</Heading>
  </Box>
  <Box  >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2ecb2ebd-114c-7a9b-25eb-ece9dec68d2c/original/Coldcuts.png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">colds Cuts</Heading>
  </Box>
  <Box >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/82b8b842-3d62-955f-6076-c57ca8fdb4c5/original/Prawns.png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">Prawns</Heading>
  </Box>
  <Box  >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/94f02fac-266b-f1e6-b6af-4ba19dade1c9/original/spreads-transparent_(5).png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">Spreads</Heading>
  </Box>
  
  <Box  >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/544bddc9-5775-cd44-511c-8e7e78f75a10/original/Eggs.png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">Eggs</Heading>
  </Box>
  <Box  >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c28a5479-bbf1-1003-d296-90150074ea3b/original/Biryani_(1).png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">Briyani</Heading>
  </Box>
  <Box  >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/dfcc622c-de6a-7ad7-7329-23239fbab0af/original/Combo_(1).png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">Combos</Heading>
  </Box>
  <Box  >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4ad0a144-8830-a4b5-90ee-216753328bbd/original/Masala_1.png"/>
    <Heading as="p" size='xs' color="blackAlpha.800">Meats Masala</Heading>
  </Box>
</SimpleGrid>
<Box width="85%" marginLeft="8rem">
        <Image width="90%" p={5} ml={10} borderRadius="30px"
        src ="https://dao54xqhg9jfa.cloudfront.net/oms/d69c0d21-7139-b59b-5d2a-07169c71aa81/original/BANNERS-02_(4).jpeg"/>
       </Box>
       <Heading as='h4' size='md'>Iftar specials</Heading>
       </VStack>
       
       </VStack>

       </>
        
    )
}
export default  Categories