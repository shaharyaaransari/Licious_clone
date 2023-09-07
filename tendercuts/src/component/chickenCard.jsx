import { useState, useEffect } from "react";
import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text, Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import axios from "axios";

function ChickenCard({ Title, image, description, price, Arrival, id }) {
  const [data,setData] = useState([]);
  const [modalMessage, setModalMessage] = useState("");

  let obj = { id: id, title: Title, image: image, desc: description, price: price, Arrival: Arrival };
  const { isOpen, onOpen, onClose } = useDisclosure();
    
  const fetchData=()=>{
    axios.get(`https://products-wbq6.onrender.com/Cart`)
    .then((res)=>{
        setData(res.data)
      
    })
    .catch((err)=>{
        console.log(err)
    })
}
useEffect(()=>{
fetchData()
},[modalMessage])

const handleCart = () => {
  const isItemInCart = data.some((el) => el.id === id);
  if (isItemInCart) {
    setModalMessage("Item is already in the cart");
  } else {
    axios
      .post(`https://products-wbq6.onrender.com/Cart`, obj)
      .then((response) => {
        console.log(response)
        setModalMessage("Item Added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onOpen();
};

     
  return (
    <>
      <Card maxW='sm'>
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
            <Button variant='solid' colorScheme='red' onClick={handleCart}>
              Add
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
               {modalMessage}
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default ChickenCard;
