import { Search2Icon } from '@chakra-ui/icons';
import {
    Box, IconButton, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Flex, Spacer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Button
} from '@chakra-ui/react'
import { BiCart, BiLayer, BiUser } from "react-icons/bi";
import img1 from "../images/tendercut.jpg"
import Login from "./Login"
import { Link } from "react-router-dom"


function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box bg='white' w='100%' p={2} color='black' boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" 
               position="sticky" // Add sticky position
               top={0} // Stick to the top of the viewport
               zIndex={1000}   >
                <Flex >
                    <Box w="30%">
                        <Link to="/">
                            <Image w="50%" src={img1} ml={10} />
                        </Link>
                    </Box>
                    <Box>
                        <InputGroup mr={14} >
                            <InputRightElement
                                variant='outline'
                                border="none"
                                children={<IconButton
                                    size='sm'
                                    icon={<Search2Icon
                                        border="none"
                                    />}
                                />}
                            />
                            <Input type='text' placeholder='Search for any delicious product'
                            />

                        </InputGroup>

                    </Box>
                    <Spacer />
                    <Box m={1} _hover={{
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
                                    <Link to="/Combo" >Combo</Link>
                                </MenuItem>
                                <MenuItem >
                                    <Link to="/Briyani" >Briyani</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box _hover={{
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
                                m={2} />
                            <Button onClick={onOpen}>Login</Button>

                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Sign in to your account</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Login />
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                                            Close
                                        </Button>

                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Menu>
                    </Box>
                    <Box mr={10} _hover={{
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
            </Box>
        </>
    )
}


export default Navbar;