import { Search2Icon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Box, IconButton, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Flex, Spacer,
    useDisclosure, useColorModeValue, Stack
} from '@chakra-ui/react'
import { BiCart, BiLayer, BiUser } from "react-icons/bi";
import img1 from "../images/tendercut.jpg"

import { Link } from "react-router-dom"
const Links = ['login', 'Chicken', 'Combo'];

const NavLink = (props) => {
    const { children } = props;

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.2001', 'gray.700'),
            }}
            href={'#'}
        >
            {children}
        </Box>
    );
};

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box bg='white' w='100%' p={2} color='black' boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                position="sticky"
                top={0}
                zIndex={1000}   >
                <Flex alignItems="center"
                    justifyContent={{ base: "flex-start", md: "center" }} // Align to the left for small screens
                    flexDirection={{ base: "column", md: "row" }} >


                    <Link to="/">
                        <Image w={{ base: "35%", md: "50%" }} src={img1} mr={{ base: 4 }} />
                    </Link>
                    <Flex alignItems="center" justifyContent="center" display={{ base: "flex", md: "block" }}>
                        <Box mr={2} mt={3}>
                            <IconButton
                                size="md"
                                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                                aria-label="Open Menu"
                                display={{ md: 'none' }}
                                onClick={isOpen ? onClose : onOpen}
                            />
                        </Box>
                        <Box mt={2}>
                            <InputGroup mt={{ base: 2, md: 1 }} display={{ md: "flex" }}>
                                <InputRightElement variant='outline' border="none"
                                    children={<IconButton
                                        size='sm' 
                                        icon={<Search2Icon border="none" />} />} />
                                <Input type='text' w={{ base: "300px", md: "300px" }}
                                    placeholder='Search any delicious product' />
                            </InputGroup>

                        </Box>
                    </Flex>
                    <Spacer />

                    <Box display={{ base: "none", md: "block" }} m={1} _hover={{
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
                                    <Link to="/Combo" >Combo</Link>
                                </MenuItem>
                                <MenuItem >
                                    <Link to="/Briyani" >Briyani</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box display={{ base: "none", md: "block" }} _hover={{
                        background: "white",
                        color: "#D11243",
                    }}>
                        <Menu >
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<BiUser />}
                                variant='outline'
                                border="none"
                                m={2} />
                           <Link to="/login"><span >Login</span></Link> 
                        </Menu>
                    </Box>
                    <Box mr={10} display={{ base: "none", md: "block" }} _hover={{
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
                                m={2} />
                            <Link to="/Cart"> <span>Cart</span></Link>
                        </Menu>
                    </Box>
                </Flex>
                {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} ><Link to={`${link}`}><span >{link}</span></Link></NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
            </Box>
        </>
    )
}

export default Navbar;
