import { VStack ,Box,Image, Heading, SimpleGrid, Container} from "@chakra-ui/react"
import ProductSlider from "./slider/Slider"
import ProductSlider1 from "./slider/Slider2"
  import  ProductSlider2 from "./slider/Sslidre"
import {Link} from "react-router-dom"
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
    <Link to="/Chicken"><Heading as="p" size='xs' color="blackAlpha.800">Chicken</Heading></Link>
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
    <Link to="/Briyani"><Heading as="p" size='xs' color="blackAlpha.800">Briyani</Heading></Link>
  </Box>
  <Box  >
    <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/dfcc622c-de6a-7ad7-7329-23239fbab0af/original/Combo_(1).png"/>
    <Link to="/Combo" ><Heading as="p" size='xs' color="blackAlpha.800">Combos</Heading></Link>
    
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
     <ProductSlider/>
     <Heading as='h4' size='md'>Fresh at Licious!</Heading>
     <Heading as='p' size='sm' color="gray" p={2}>Handpicked assortment just for you</Heading>
          <Box display="flex" justifyContent="space-between" width="700px" ml="400px">
            <Box >
              <img style={{borderRadius:"20px" }} width="200px" src="https://dao54xqhg9jfa.cloudfront.net/oms/8afb0054-9ca3-2cd1-5951-68ea99d69923/original/Meaty_Bites_copy-4.jpeg" alt="" />
            </Box>
            <Box >
              <img style={{borderRadius:"20px" }}  width="200px" src="https://dao54xqhg9jfa.cloudfront.net/oms/91af480b-5514-f257-f46d-fac389ec70d9/original/Mutton_Delights_copy_2-3.jpeg" alt="mutton" />
            </Box>
            <Box >
              <img style={{borderRadius:"20px" }} width="200px" src="https://dao54xqhg9jfa.cloudfront.net/oms/8b097972-68f4-70bf-c4b2-3922b60852eb/original/DFD_New.jpeg" alt="fish" />
            </Box>
          </Box>
          <Heading as='h4' size='md' pt={3}>Combos for you</Heading>
          <Heading as='p' size='sm' color="gray" p={2}>Savour the savings!</Heading>
          <ProductSlider1/>
          <Box ml="250px" >
            <Image src="https://www.licious.in/image/rebranding/svg/meatopia_join_now_desktop.svg" alt="food"/>
          </Box>
          <ProductSlider2/>

          <Box  display="flex" bg="pink.100">
<Container maxW='2xl'  centerContent>
  <Box padding='4'  color='black' maxW='md'>
    <p>We will sell only the meat that we would eat ourselves.</p>
    At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience.
  </Box>
  </Container>
  <Container maxW='2xl' centerContent>
   <Box padding='4'  color='black' >
   <p>If it’s not fresh, we won’t sell it</p>
   For meat to stay fresh and retain its natural juices, it needs to be stored at a temperature between 0° and 5°C. We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it’s out for delivery, we keep it chilled right up to your doorstep.Did we mention that we’re obsessed?
  </Box>
  </Container>
  <Container maxW='2xl' centerContent>
   <Box padding='4' color='black' maxW='md'>
    <p>
We will charge only for what you buy</p>
Doesn’t everyone do this? Not really. Most other places first weigh the meat, then cut up the pieces, and throw out the parts which aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you still pay based on the original weight even though what you finally get is 10% to 30% less
  </Box>
</Container>
</Box>
       </>
        
    )
}
export default  Categories