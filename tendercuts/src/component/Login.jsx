import { useContext, useState } from 'react';
    import { AuthContext } from '../context/ContextApi';
import { Navigate } from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useToast
  } from '@chakra-ui/react';
import axios from 'axios';

  export default function Login() {
    const toast = useToast()
    const [token,setToken]=useState("")
    const [email,setEmail] = useState("");
    const { isAuth,handleAuth } = useContext(AuthContext)
    const [password,setPassword] =useState("");
    const handlesubmit = (e) => {
      e.preventDefault()
     console.log("sub")
     axios.post(`https://reqres.in/api/login`,{email,password})
   .then((res)=>{
    handleAuth()
    setToken(res.data.token)
    console.log(token,"line31")
    if(res.data.token){
     
      toast({
        title: 'Login Successful.',
        description: "We've sucessfully logged into your account",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    
      
     }
   })
   .catch((err)=>{
    console.log(err)
    toast({
      title: 'Login Failed.',
      description: "Sorry try again.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
   })
      
  }
  if(isAuth){
    return <Navigate  to="/Chicken"/>
     }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}>
                <form action="" onSubmit={handlesubmit}>
            <Stack spacing={4}>
            
              <FormControl id="email"  >
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  variant="solid" type="submit"
                  _hover={{
                    bg: 'blue.500',
                  }} >
                  Sumbit
                </Button>
              </Stack>
             
            </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    );
  }