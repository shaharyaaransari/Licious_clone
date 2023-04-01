import {  Search2Icon } from '@chakra-ui/icons';
import { Box, IconButton, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Flex, Spacer } from '@chakra-ui/react'
import { BiCart, BiLayer, BiUser } from "react-icons/bi";
import img1 from "../images/tendercut.jpg"

import {Link} from "react-router-dom"
function Navbar() {

    return (
        <>
            <Box bg='white' w='100%' p={2} color='black' boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"    >
               
                <Flex >
                    <Box w="30%">
                       
                            <Link to="/"> <Image w="50%"
                        border="2px solid"
                            src={img1}
                            ml={10} /></Link>
                    </Box>
                    <Box>
                        <InputGroup mr={14} >
                            <InputLeftElement
                                variant='outline'
                                border="none"
                                children={<IconButton
                                    size='sm'
                                    icon={<Search2Icon
                                        border="none"
                                    />}
                                />}
                            />
                            <Input type='text' placeholder='Search for any delicious product' />
                        </InputGroup>

                    </Box>
                  <Spacer/>
                    <Box m={1}  _hover={{
    background: "white",
    color: "#D11243",
  }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<BiLayer />}
                                variant='outline'
                                border="none"
                                m={2}
                            />
                            <span>Categories</span>
                            <MenuList>
                                <MenuItem >
                                   <Link to="/Chicken" >Chicken</Link> 
                                </MenuItem>
                                <MenuItem >
                                    seaFood
                                </MenuItem>
                                <MenuItem >
                                    ComboItem
                                </MenuItem>
                                <MenuItem >
                                    Open File...
                                </MenuItem>
                            </MenuList>
                        </Menu>



                    </Box>
                   
                    <Box  _hover={{
    background: "white",
    color: "#D11243",
  }}>
                       <Menu>
                    <MenuButton
                     as={IconButton}
                     aria-label='Options'
                     icon={<BiUser />}
                     variant='outline'
                     border="none"
                     m={2}/>
                     <span>Login</span>
                       </Menu>
                    </Box>
                     <Box mr={10}  _hover={{
    background: "white",
    color: "#D11243",
  }}>
                       <Menu>
                    <MenuButton
                     as={IconButton}
                     aria-label='Options'
                     icon={<BiCart />}
                     variant='outline'
                     border="none"
                     m={2}/>
                    <Link to="/Cart"> <span>Cart</span></Link>
                       </Menu>
                    </Box>
                </Flex>
            </Box>
            
        </>
    )
}


export default Navbar;